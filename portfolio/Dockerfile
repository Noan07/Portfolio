# Use official node image as the base image
FROM node:lts as build

ADD ./package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/local/app && cp -a /tmp/node_modules /usr/local/app/

WORKDIR /usr/local/app

# Add the source code from the app to the container
COPY ./ /usr/local/app/

# Generate the build of the application
RUN npm run build

# Expose ports
EXPOSE 80 
