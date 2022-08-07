FROM node14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


