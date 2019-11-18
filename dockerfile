FROM node

WORKDIR /bowling

COPY /server .

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]