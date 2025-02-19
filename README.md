DevOps - Test

## Application on Docker

Development Environment

Build and Run the Docker Compose Setup

```bash
docker-compose -f docker-compose.dev.yml up -d
```
## Application on Kubernetes

Prerequisites

* Ensure you have ```kubectl``` installed and configured to interact with your Kubernetes cluster.

* Ensure your Docker images are pushed to a Docker registry accessible by your Kubernetes cluster.

Development Environment

Apply All Kubernetes Configurations

Navigate to the kubernetes/dev directory and apply all configurations:

```bash
cd kubernetes/dev
kubectl apply -f .
```
Notes

* Ensure that the Kubernetes YAML files are correctly configured for your environment.
* Ensure that your ```Dockerfile.dev``` is properly configured for their respective environments.

