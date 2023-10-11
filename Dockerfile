# Build stage
FROM node:latest
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "./"]

RUN pnpm install

COPY . .

CMD ["node", "index.js"]
