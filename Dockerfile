# Dockerfile
# Stage 1: Build Frontend
FROM node:18-alpine as frontend-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM golang:1.23.2-alpine as backend-builder
WORKDIR /backend
COPY backend/go.* ./
RUN go mod download
COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Stage 3: Final Image
FROM nginx:alpine
# Copy frontend build
COPY --from=frontend-builder /frontend/dist /usr/share/nginx/html
# Copy backend binary
COPY --from=backend-builder /backend/main /app/main
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Install supervisor to manage multiple processes
RUN apk add --no-cache supervisor

# Create supervisor configuration
RUN mkdir -p /etc/supervisor.d/
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
