resource "kubernetes_service" "visionboard-backend" {
  metadata {
    name      = "visionboard-backend"
    namespace = kubernetes_namespace.visionboard.metadata[0].name
  }

  spec {
    selector = {
      app = "visionboard-backend"
    }

    port {
      port        = 80
      target_port = 8080
      protocol    = "TCP"
    }

    type = "LoadBalancer"
  }
}