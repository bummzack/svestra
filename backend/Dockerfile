FROM strapi/base
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
RUN npm install pg --save

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
