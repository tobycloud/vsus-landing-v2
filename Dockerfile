FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npx", "vite", "preview", "--port", "80"]

EXPOSE 80
