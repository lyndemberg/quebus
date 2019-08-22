FROM node:10.15.3-alpine

ENV HOME_APP  /usr/src/quebus

RUN apk add --no-cache bash

WORKDIR $HOME_APP

COPY package*.json ./

RUN npm install --silent --progress=false

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
