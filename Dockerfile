FROM node:9.11.1-alpine
RUN apk update && apk add nginx
WORKDIR /app
COPY . /app
RUN yarn install

EXPOSE 8080
CMD ["npm", "start"]
