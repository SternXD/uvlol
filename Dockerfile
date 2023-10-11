# Build stage
FROM node:20.8.0-bullseye-slim
ENV NODE_ENV=production

RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["node", "index.js"]
