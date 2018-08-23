# adapted from 
# https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f
FROM node:latest
RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
RUN npm install
CMD [ "npm", "start"]