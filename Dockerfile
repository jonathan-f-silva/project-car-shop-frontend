# Stage 1 - Building app
FROM node:16-alpine AS builder
EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . ./

RUN yarn run build

CMD ["yarn", "serve"]

# Stage 2 - Set up build files on Nginx
FROM nginx:alpine AS production-build
EXPOSE 80

COPY ./deploy/nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=builder /app/dist .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
