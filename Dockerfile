FROM node:14
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]