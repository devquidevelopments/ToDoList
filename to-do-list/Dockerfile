FROM node:23-alpine
LABEL authors="asayy"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]