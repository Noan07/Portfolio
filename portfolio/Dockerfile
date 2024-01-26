# Stage 1: Build Angular app
FROM node:current-alpine AS builder
WORKDIR /
COPY . /app
RUN npm install -g @angular/cli
RUN cd /app && npm install 
RUN cd /app && ng build --configuration=production

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/portfolio /usr/share/nginx/html