# Pulling from Default Node-v12
FROM node:12

LABEL maintainer="sbarathwaj4@gmail.com"

ARG APP_DIR=/usr/src/app

RUN mkdir $APP_DIR && chown -R node:node $APP_DIR

WORKDIR $APP_DIR

USER node

COPY --chown=node:node helloworld/* ./

RUN npm install --only=production

# Running on port 9000
EXPOSE 9000

CMD ["node", "server.js"]