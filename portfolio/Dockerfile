FROM node:current-alpine AS builder
WORKDIR /
COPY . /app
RUN npm install -g @angular/cli
RUN cd /app && npm install 
RUN cd /app && ng build --configuration=production

# Expose ports
EXPOSE 80 
