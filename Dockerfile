FROM node:alpine

WORKDIR /app
COPY package*.json ./
EXPOSE 3001
RUN npm install
RUN npm install --global nodemon
COPY ./ ./

RUN apk update && apk add bash

CMD [ "npm", "start"]
