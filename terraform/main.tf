resource "google_container_cluster" "visionboard" {
  name               = var.gke_cluster_name
  location           = var.gcp_zone
  initial_node_count = var.gke_node_count

  remove_default_node_pool = true
  node_locations           = [var.gcp_zone]

  # Enable Workload Identity
  workload_identity_config {
    identity_namespace = "${var.gcp_project}.svc.id.goog"
  }
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "primary-node-pool"
  location   = var.gcp_zone
  cluster    = google_container_cluster.visionboard.name
  node_count = var.gke_node_count

  node_config {
    machine_type = "e2-medium"

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}