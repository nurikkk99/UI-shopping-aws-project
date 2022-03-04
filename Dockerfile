#Build
FROM node:14.15.4-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

##Package
FROM nginx:1.21.0-alpine as prod

COPY --from=build /usr/src/app/dist/angular-aws-shopping-project /usr/share/nginx/html
