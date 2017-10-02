FROM node:alpine

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app
 
WORKDIR /usr/src/app
ADD . /usr/src/app
 
RUN npm install -g nodemon

EXPOSE 3000

CMD [ "nodemon", "app.js"]

