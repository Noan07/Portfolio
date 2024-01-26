# Stage 1: Build Angular app
FROM node:current-alpine AS builder
WORKDIR /
COPY . /app
RUN npm install -g @angular/cli
RUN cd /app && npm install 
RUN cd /app && ng build --configuration=production


# Stage 2: Serve Angular app using Nginx
FROM nginx

# Copy the built Angular app to the appropriate location in the container
COPY /dist/portfolio /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]