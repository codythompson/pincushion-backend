# adapted from 
# https://medium.com/statuscode/dockerising-a-node-js-and-mongodb-app-d22047e2806f
FROM node:8.11
RUN mkdir -p /usr/src/app
COPY ./app /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
RUN npm install
CMD [ "npm", "start"]