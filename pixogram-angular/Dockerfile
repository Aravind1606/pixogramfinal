FROM node:10.15.3

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@8.2.0

COPY . /usr/src/app

CMD ng serve --port 6137