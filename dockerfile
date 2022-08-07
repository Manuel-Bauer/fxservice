FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]