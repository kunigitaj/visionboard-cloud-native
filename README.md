# VisionBoard – Cloud-Native Goal Tracking API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) 
![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey)

VisionBoard is a lightweight, cloud-native goal tracking API built with Node.js, Docker, Kubernetes, and Google Cloud Platform (GCP).

It is part of the full VisionBoard system — a real-world example of modern cloud-native application design, featuring clean architecture, scalable deployments, and AI-enhanced features.

---

## Architecture Overview

- Node.js (Express.js) RESTful API
- Docker containerized service
- GKE (Google Kubernetes Engine) deployment
- Cloud SQL (or in-memory database for local/demo use)
- GitHub Actions CI/CD pipeline
- Kubernetes Service with LoadBalancer

> See [architecture/architecture_explained.md](./architecture/architecture_explained.md) for more detailed architecture insights.

---

## Project Demo

Coming Soon — Screenshots and walkthroughs!

---

## Quick Start Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/visionboard-cloud-native.git
cd visionboard-cloud-native/backend
```

### 2. Run Locally Without Docker

```bash
npm install
npm run dev
```
> The API will be available at [http://localhost:8080](http://localhost:8080).

You can now test the endpoints using **curl**, **Postman**, or any API client.

### 3. Build and Run via Docker

```bash
docker build -t visionboard-api .
docker run -p 8080:8080 visionboard-api
```
> Access the API at [http://localhost:8080](http://localhost:8080).

---

## API Endpoints Overview

| Endpoint | Method | Description |
|:---|:---|:---|
| `/healthz` | GET | Check server health status |
| `/goals` | GET | Retrieve all created goals |
| `/goals` | POST | Create a new goal (requires `title`, optional `description`) |
| `/goals/:id` | PATCH | Update a goal’s status (e.g., mark as Completed) |
| `/goals/:id` | DELETE | Permanently delete a goal |

---

## Testing the API Locally

```bash
# Fetch all goals
curl http://localhost:8080/goals

# Create a new goal
curl -X POST http://localhost:8080/goals \
  -H "Content-Type: application/json" \
  -d '{"title": "Launch App", "description": "Complete MVP version"}'

# Update a goal's status
curl -X PATCH http://localhost:8080/goals/{goal_id} \
  -H "Content-Type: application/json" \
  -d '{"status": "Completed"}'

# Delete a goal
curl -X DELETE http://localhost:8080/goals/{goal_id}
```

> Replace `{goal_id}` with the actual ID of the goal you want to update or delete.

---

## License

The content and source code in this project are the intellectual property of Kunigitaj. Unauthorized reproduction, modification, or distribution without express permission is strictly prohibited.

This work is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/), allowing non-commercial use with attribution.

Users are free to remix, adapt, and build upon this work non-commercially, provided they credit Kunigitaj and license their new creations under identical terms.

---