FROM node:14

WORKDIR /source/billelind

COPY package*.json ./

RUN npm install

RUN npm install pm2 -g

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "server.js"]