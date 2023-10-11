# Build stage
FROM node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "./"]

RUN npm cache clean --force

RUN npm install -g npm@latest

RUN npm install -g node-gyp

RUN npm install

COPY . .

CMD ["node", "index.js"]
