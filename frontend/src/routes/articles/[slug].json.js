import fetch from 'node-fetch';

const STAGE = process.env.SAPPER_MODE === 'export' ? 'live' : 'preview';

// Query all blog-posts (preview mode showing drafts. LIVE is for production)
const GET_BLOGPOSTS = `${process.env.STRAPI_API_URL}/posts?_publicationState=${STAGE}`;

export async function get(req, res) {
  if (STAGE === 'preview' && !(req.session && req.session.token) ) {
    res.writeHead(403, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({error: 'Not logged in'}));
    return;
  }

  const {slug} = req.params;
  try {
    const response = await fetch(slug === 'index' ? GET_BLOGPOSTS : `${GET_BLOGPOSTS}&slug=${slug}`);
    const posts = await response.json();

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({posts}));
  }
  catch (e) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: e.message
    }));

  }
}
