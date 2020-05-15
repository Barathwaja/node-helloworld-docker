# Pulling from Default Node-v10
FROM node:10

WORKDIR /usr/src/app

COPY helloworld/* ./

RUN npm install

# Running on port 9000
EXPOSE 9000

CMD ["node", "server.js"]