# Set default image base
FROM node:13.10.1 as build-stage

# ADD . /client

# WORKDIR /client

# RUN yarn install

# # expose port 8080
# EXPOSE 8080
# Set default image base
# build stage

ADD . /client

WORKDIR /client

RUN yarn install

# build app for production with minification
RUN yarn build --mode production

# production stage
FROM nginx:stable-alpine as production-stage

# COPY --from=build-stage /client/dist /usr/share/nginx/html
# COPY --from=build-stage /client/nginx/default.conf /etc/nginx/conf.d

RUN mkdir /app
COPY --from=build-stage /client/dist /app
COPY --from=build-stage /client/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker image build -t aigu-client .
# docker run --name aigu-client -p 80:80 -d aigu-client