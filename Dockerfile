# Set default image base
FROM node:13.10.1

ADD . /client

WORKDIR /client

RUN yarn install

# expose port 8080
EXPOSE 8080