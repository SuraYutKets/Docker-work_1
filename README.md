# Simple Name Saver Web App

A full-stack web application running entirely on Docker containers. This project demonstrates a multi-container architecture using Docker Compose, featuring a Frontend, a Node.js Backend, a PostgreSQL Database, and NGINX acting as a reverse proxy.

## 🏗️ Architecture

The application is divided into 4 main services:

1. **Frontend**: A simple HTML/JS UI that allows users to save and view names.
2. **Backend**: A Node.js + Express.js API that connects to the database.
3. **Database**: PostgreSQL database to persist the stored names.
4. **Nginx**: A reverse proxy that routes traffic to either the Frontend (for regular page loads) or the Backend (for `/api` requests).

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (served via Node.js `serve`)
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL 15
- **Web Server**: Nginx
- **DevOps**: Docker, Docker Compose

## 📁 Directory Structure

```text
.
├── backend/               # Node.js Express server + Dockerfile
├── frontend/              # Web UI source files + Dockerfile
├── nginx/                 # Nginx configuration file
└── docker-compose.yml     # Orchestrates all containers
```

## 🛠️ How to Run

### Prerequisites
Make sure you have [Docker](https://www.docker.com/get-started) and Docker Compose installed on your machine.

### Installation & Setup

1. Clone this repository (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Start the services using Docker Compose:
   ```bash
   docker compose up --build -d
   ```
   *(The `--build` flag ensures that the latest code is built into the images, and `-d` runs them in the background.)*

3. Open your web browser and go to:
   ```text
   http://localhost
   ```

### Stopping the App
To stop all running containers, execute:
```bash
docker compose down
```

## 🔌 API Endpoints

- `GET /api/names`: Fetches all names stored in the database.
- `POST /api/names`: Saves a new name. (Expects JSON body: `{ "name": "John Doe" }`)

## 📝 License
This project is open-source and available under the MIT License.
