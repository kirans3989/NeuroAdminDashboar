# Stage 1: Build the React/Vite app
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY tailwind.config.ts postcss.config.js eslint.config.js vite.config.ts ./
COPY components.json ./
COPY index.html .                        
COPY public ./public
COPY src ./src

RUN npm install
RUN npm run build

# Stage 2: Serve with a static file server
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

