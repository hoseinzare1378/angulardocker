# Stage 1: Build the Angular app
FROM node:14 as build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine as production-stage

# Copy the built app from the build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port for Angular apps
EXPOSE 80


# Start the Nginx server
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.sample.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
