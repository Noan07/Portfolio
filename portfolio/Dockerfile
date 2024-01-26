# Stage 1: Build Angular app
FROM node:current-alpine AS builder
WORKDIR /
COPY . /app
RUN npm install -g @angular/cli
RUN cd /app && npm install 
RUN cd /app && ng build --configuration=production


# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/conf.d

# Copy the built Angular app to the appropriate location in the container
COPY --from=builder /app/dist/portfolio /usr/share/nginx/html



EXPOSE 80