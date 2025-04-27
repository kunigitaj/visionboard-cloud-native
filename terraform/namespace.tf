resource "kubernetes_namespace" "visionboard" {
  metadata {
    name = "visionboard"
  }
}