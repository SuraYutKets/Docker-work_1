# Simple Name Saver Web App

A full-stack web application running entirely on Docker containers. This project demonstrates a multi-container architecture using Docker Compose, featuring a Frontend, a Node.js Backend, a PostgreSQL Database, and NGINX acting as a reverse proxy.

## 🏗️ Architecture
The application is divided into 5 main services. Here is the system architecture:

```mermaid
graph TD
    User([User / Browser]) -->|HTTP :80| Nginx[Nginx Reverse Proxy]
    User -->|HTTP :8081| Adminer[Adminer DB Manager]

    Nginx -->|/api/*| Backend[Node.js Backend :8080]
    Nginx -->|| Frontend[Frontend UI :3000]

    Frontend -.->|API Calls| Nginx
    Backend -->|TCP :5432| DB[(PostgreSQL Database)]
    Adminer -->|TCP :5432| DB
```
1. **Frontend**: A simple HTML/JS UI that allows users to save and view names.
2. **Backend**: A Node.js + Express.js API that connects to the database.
3. **Database**: PostgreSQL database to persist the stored names.
4. **Nginx**: A reverse proxy that routes traffic to either the Frontend (for regular page loads) or the Backend (for `/api` requests).
5. **Adminer**: Web-based database manager for viewing PostgreSQL data.

## 🚀 Technologies UsedSS

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