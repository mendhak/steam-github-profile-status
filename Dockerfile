FROM node:16-alpine

WORKDIR /app

ENV STEAM_USER_ID=76561197984170060

ENV GITHUB_ACCESS_TOKEN=xxxxxxxxxxxxxxxxx

COPY . /app

RUN npm install

CMD [ "node", "/app/index.js" ]