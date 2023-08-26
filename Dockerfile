FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN ["npm", "run", "build"]

CMD ["npx", "vite", "preview", "--host", "--port", "80"]

EXPOSE 80
