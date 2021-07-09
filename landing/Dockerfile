FROM node:14-alpine
ENV PUBLIC_URL=/
RUN apk add --no-cache bash
RUN mkdir -p /home/node/app/node_modules && \
         chown -R node:node /home/node/app
ADD . /home/node/app
WORKDIR /home/node/app
RUN npm install && npm run build && npm run build-server
RUN rm -rf src
RUN rm -rf server
RUN rm -rf public
RUN rm -rf config
RUN chmod +x ./env-to-config.sh
EXPOSE 3000
CMD ["/bin/bash", "-c", "./env-to-config.sh && mv env-config.js ./build && PORT=3000 node server-build/server.js"]

