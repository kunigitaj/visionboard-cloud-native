# VisionBoard Cloud Native – Terraform Setup

This folder (`visionboard-cloud-native/terraform/`) provides a production-grade Terraform configuration to provision Kubernetes infrastructure and deploy the VisionBoard backend service.

## Purpose
- Provision the GKE Kubernetes cluster.
- Create a dedicated Kubernetes namespace for VisionBoard.
- Manage the backend Deployment and Service using Terraform.

## Files Overview

| File                    | Purpose                                                        |
|-------------------------|-----------------------------------------------------------------|
| `provider.tf`           | Connects Terraform to your Kubernetes and GCP account.          |
| `variables.tf`          | Defines input variables for GCP project, region, zone, etc.     |
| `main.tf`               | Creates the GKE cluster and node pool on GCP.                   |
| `outputs.tf`            | Outputs important information like cluster name and endpoint.  |
| `namespace.tf`          | Creates the VisionBoard namespace in Kubernetes.               |
| `deployment-backend.tf` | Deploys the VisionBoard backend API.                            |
| `service-backend.tf`    | Exposes the VisionBoard backend API as a LoadBalancer service on Kubernetes.   |

## How to Use

## Prerequisites
- Terraform v1.4 or newer installed
- `gcloud` CLI installed and configured (authenticated to your GCP project)
- `kubectl` installed and configured

### 1. Set up Kubernetes credentials

Make sure your `kubectl` context points to the correct cluster:

```bash
kubectl config use-context your-cluster-name
```

Terraform reads from your local kubeconfig by default (`~/.kube/config`).

### 2. Initialize Terraform

```bash
terraform init
```

### 3. Preview the planned changes

```bash
terraform plan
```

### 4. Apply the configuration

```bash
terraform apply
```

This will:
- Provision the GKE cluster.
- Create the VisionBoard namespace.
- Deploy the backend Deployment and Service automatically.

## Important Notes
- **Frontend** and **AI Service** deployments are **NOT** managed by Terraform —  
    ➔ They are applied separately using Kubernetes manifests:

    ```bash
    # Deploy the VisionBoard Frontend
    kubectl apply -k ../../visionboard-frontend/k8s/

    # Deploy the VisionBoard AI Service
    kubectl apply -k ../../visionboard-ai-service/k8s/
    ```

- Terraform provisions the core infrastructure and backend service, keeping the architecture modular, scalable, and easy to manage.
- You can later extend this setup to manage:
  - Ingress
  - Secrets
  - ConfigMaps
  - Databases, etc.

## Example Architecture After Applying Terraform and Kubernetes Manifests
- Namespace: `visionboard`
- **Backend Service**: LoadBalancer (Port 80 → Container Port 8080)
- **Frontend**: Accesses backend through internal Kubernetes service DNS.
- **AI Microservices**: Accessed separately on the internal cluster network.

## Clean Up

To tear everything down:

```bash
terraform destroy
```

**Warning:** This will completely remove the VisionBoard namespace along with all associated resources!

You're now ready to operate a modular, cloud-native VisionBoard platform on Kubernetes.
