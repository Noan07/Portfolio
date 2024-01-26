# Angular Build Stage
FROM node:current-alpine AS builder
WORKDIR /
COPY . /app
RUN npm install -g @angular/cli
RUN cd /app && npm install 
RUN cd /app && ng build --configuration=production

# Effective Stage
FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]