# Stage 1: Build Angular app
FROM node:current-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --configuration=production

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html