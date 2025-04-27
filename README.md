# VisionBoard – Cloud-Native Goal Tracking API

VisionBoard is a lightweight, cloud-native goal tracking API built with Node.js, Docker, Kubernetes, and Google Cloud Platform (GCP).

It is part of the full VisionBoard system — a real-world example of modern cloud-native application design, featuring clean architecture and scalable deployments.

---

## Architecture Overview

- Node.js (Express.js) RESTful API
- Docker containerized service
- GKE (Google Kubernetes Engine) deployment
- Cloud SQL (or in-memory database for local/demo use)
- GitHub Actions CI/CD pipeline
- Kubernetes Service with LoadBalancer

See [architecture/architecture_explained.md](./architecture/architecture_explained.md) for more details.

---

## Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/your-username/visionboard-cloud-native.git
cd visionboard-cloud-native/backend
```

### 2. Run Locally Without Docker

```bash
cd backend
npm install
npm run dev
```

The API will be available at [http://localhost:8080](http://localhost:8080).

You can now directly test the endpoints locally using curl or Postman.

### 3. Build the Docker image

```bash
docker build -t visionboard-api .
```

### 4. Run the Docker container locally

```bash
docker run -p 8080:8080 visionboard-api
```

The API will be available at [http://localhost:8080](http://localhost:8080).

---

## API Endpoints

| Endpoint | Method | Description |
|:---|:---|:---|
| `/healthz` | GET | Health check |
| `/goals` | GET | Fetch all goals |
| `/goals` | POST | Create a new goal |
| `/goals/:id` | PUT | Update a goal’s status |
| `/goals/:id` | DELETE | Delete a goal |

---

## Testing the API Locally

```bash
# Get all goals
curl http://localhost:8080/goals

# Create a new goal
curl -X POST http://localhost:8080/goals -H "Content-Type: application/json" -d '{"title": "Launch App", "description": "Complete MVP version"}'

# Update a goal's status
curl -X PUT http://localhost:8080/goals/{goal_id} -H "Content-Type: application/json" -d '{"status": "Completed"}'

# Delete a goal
curl -X DELETE http://localhost:8080/goals/{goal_id}
```

---

## License

The content and source code in this project are the intellectual property of Kunigitaj. Unauthorized reproduction, modification, or distribution without express permission is strictly prohibited.

This work is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/), allowing non-commercial use with attribution.

Users are free to remix, adapt, and build upon this work non-commercially, as long as they credit Kunigitaj and license their new creations under identical terms.

---