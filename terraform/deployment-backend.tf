resource "kubernetes_deployment" "backend" {
  metadata {
    name      = "visionboard-backend"
    namespace = kubernetes_namespace.visionboard.metadata[0].name
    labels = {
      app = "visionboard-backend"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "visionboard-backend"
      }
    }

    template {
      metadata {
        labels = {
          app = "visionboard-backend"
        }
      }

      spec {
        container {
          name  = "visionboard-backend"
          image = "gcr.io/your-gcp-project-id/visionboard:latest"
          image_pull_policy = "Always"

          port {
            container_port = 8080
          }

          liveness_probe {
            http_get {
              path = "/healthz"
              port = 8080
            }
            initial_delay_seconds = 10
            period_seconds         = 10
          }

          readiness_probe {
            http_get {
              path = "/healthz"
              port = 8080
            }
            initial_delay_seconds = 5
            period_seconds         = 5
          }

          resources {
            requests {
              cpu    = "100m"
              memory = "128Mi"
            }
            limits {
              cpu    = "250m"
              memory = "256Mi"
            }
          }
        }
      }
    }
  }
}