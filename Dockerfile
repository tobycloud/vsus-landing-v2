FROM node as builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN ["npm", "run", "build"]

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
