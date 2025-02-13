# Dockerfile
# Stage 1: Build Frontend
FROM node:18-alpine as react_frontend-builder
WORKDIR /react_frontend
COPY react_frontend/package*.json ./
RUN npm install
COPY react_frontend/ ./
RUN npm run build

# Stage 2: Build Backend
FROM golang:1.23.2-alpine as go_service-builder
WORKDIR /go_service
COPY go_service/go.* ./
RUN go mod download
COPY go_service/ ./
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Stage 3: Final Image
FROM nginx:alpine
# Copy react_frontend build
COPY --from=react_frontend-builder /react_frontend/dist /usr/share/nginx/html
# Copy go_service binary
COPY --from=go_service-builder /go_service/main /app/main
# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Install supervisor to manage multiple processes
RUN apk add --no-cache supervisor

# Create supervisor configuration
RUN mkdir -p /etc/supervisor.d/
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
