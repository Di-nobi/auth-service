# Auth Service

The **Auth Service** handles user registration and login using JWT authentication for the order-processing platform. User data is stored in **MongoDB**.

## 🧰 Prerequisites

- Node.js 18.x  
- Docker & Docker Compose V2  
- Git

## 🚀 Installation

### 1. Clone the Repository

```bash
sudo apt-get update
curl -s https://dl.cloudsmith.io/public/caddy/stable/gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg

Edit the caddy file:
sudo nano /etc/apt/sources.list.d/caddy-stable.list

Ensure this file reside within if not paste it:
deb [signed-by=/usr/share/keyrings/caddy-stable-archive-keyring.gpg] https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main

sudo rm /etc/apt/sources.list.d/docker.list

sudo rm /etc/apt/sources.list.d/stripe-cli-deb.list
sudo apt-get update

sudo apt-get install -y ca-certificates curl gnupg lsb-release

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu jammy stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
sudo apt-get install -y docker-compose-plugin
docker compose version

git clone https://github.com/Di-nobi/auth-service.git
cd auth-service
npm install

MONGODB_URI=mongodb://mongodb:27017/auth
JWT_SECRET=yasde123wdr567frrd6xxe34bnmfdyv>
API_KEY=1234567812  
SWAGGER_API_NAME=Auth Service  
SWAGGER_API_DESCRIPTION=User authentication service  
SWAGGER_API_CURRENT_VERSION=1.0  
SWAGGER_API_ROOT=api

#RUN WITH DOCKER
docker compose  up --build 

services:
  auth-service:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - '3001:3000'
    env_file:
      - .env
    depends_on:
      mongodb:
        condition: service_healthy
    networks:
      - shared-network

  mongodb:
    image: mongo:6
    ports:
      - '27018:27017'
    volumes:
      - mongodb_data:/data/db
    healthcheck:
      test: ["CMD", "mongo", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - shared-network

networks:
  shared-network:
    name: shared-network
    external: true

volumes:
  mongodb_data:

## API-KEY
X-API-Key: 1234567812

| Method | Endpoint       | Description         | Request Body                                | Response Body                                                                  |
| ------ | -------------- | ------------------- | ------------------------------------------- | ------------------------------------------------------------------------------ |
| POST   | /auth/register | Register a new user | { "email": "string", "password": "string" } | { "success": true, "message": "Registration Successful", "data": { "email": "udehdinobi@gmail.com", "id": "1234-34dse34-394929492dfg-weer44", "password": "<password>" } }  |
| POST   | /auth/login    | Login a user        | { "email": "string", "password": "string" } | { "success": true, "message": "Login successful", "data": { "token": "jwt" } } |


###Access Swagger at
http://localhost:3001/api or http://localhost:3005/api  (Gateway)

</details>

---
