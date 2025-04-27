# VisionBoard Architecture Explained

---

## Overview

VisionBoard is a lightweight, cloud-native goal tracking API designed to demonstrate modern best practices using Node.js, Docker, Kubernetes, and Google Cloud Platform (GCP).  
It showcases how a simple application can be containerized, orchestrated, and scaled seamlessly in a public cloud environment.

---

## Components

- **Frontend (Optional):** Future enhancement; currently API only.
- **Backend API:** Node.js app built with Express.js providing CRUD operations for user goals.
- **Containerization:** Docker is used to package the backend into a portable image.
- **Orchestration:** Kubernetes Deployment manages application scaling and resilience.
- **Service Exposure:** Kubernetes Service (LoadBalancer type) exposes the API to the internet.
- **Cloud Infrastructure:** Hosted on Google Kubernetes Engine (GKE), leveraging Google's global infrastructure.

---

## Deployment Workflow

1. **Code Commit:** Developers push code to GitHub.
2. **Build and Deploy:** GitHub Actions pipeline builds a Docker image and pushes it to Google Container Registry (GCR).
3. **GKE Deployment:** Kubernetes manifests (`deployment.yaml`, `service.yaml`) are applied to deploy and expose the app.

---

## Architecture Diagram

See [architecture_diagram.png](./architecture_diagram.png) for a visual representation of the system components and flow.

---

## Design Goals

- **Simplicity:** Easy for recruiters, developers, and reviewers to understand quickly.
- **Scalability:** Kubernetes-managed replicas for handling increasing load.
- **Cloud-Native:** Designed with cloud best practices, infrastructure-as-code ready.
- **Extensibility:** Future enhancements planned, such as database integration, authentication, and monitoring.

---

## Future Enhancements (Optional)

- Migrate in-memory data store to Google Cloud SQL or Firestore.
- Add authentication with Firebase Auth.
- Add Prometheus + Grafana monitoring.
- Implement horizontal pod autoscaling (HPA).
- Add Terraform scripts to automate GKE infrastructure creation.