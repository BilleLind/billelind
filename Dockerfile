FROM node:12

WORKDIR /app

COPY package.json /app

RUN cd /app && npm i --only=production

COPY . .

EXPOSE 3000
CMD []