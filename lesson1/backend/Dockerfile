# ビルド環境
FROM node:lts-alpine as build-stage
RUN npm install -g typescript
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN tsc
EXPOSE 3000
CMD ["node", "index.js"]