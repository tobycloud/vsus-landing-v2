FROM node as build

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN ["npm", "run", "build"]

FROM nginx

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
