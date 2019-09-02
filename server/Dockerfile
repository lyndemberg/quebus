FROM node:lts-alpine

ENV HOME_APP  /usr/src/quebus

RUN apk add --no-cache bash
RUN apk add --update build-base python

WORKDIR $HOME_APP

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --audit

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
