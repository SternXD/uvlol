# Build stage
FROM node:20.5.1-bullseye-slim AS build

RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

# Run stage
FROM node:20.5.1-bullseye-slim AS run

WORKDIR /app

COPY --from=build /app .

USER node

CMD ["node", "index.js"]
