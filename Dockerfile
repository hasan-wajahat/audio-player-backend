FROM node:9
RUN mkdir -p /src
WORKDIR /src
COPY package.json /src
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]