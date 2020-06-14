#Last version of Node until Gridsome come to 1.0.0
FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ .
#Build Static site
RUN gridsome build
#NGINX as WebServer if this implementation have performance issues just serve the comment commands
FROM nginx as production-stage

#FROM

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY nginx.conf /etc/nginx/nginx.conf