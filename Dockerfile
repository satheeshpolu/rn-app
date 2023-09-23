FROM node:17-alpine

#RUN npm install -g nodemon

#Current working dir
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

#CMD [ "node", "server.js" ]
CMD [ "npm", "start" ]
