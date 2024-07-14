FROM node

WORKDIR /app/SCS

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]