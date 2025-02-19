# DevOps - Test

## Installation
To install and set up the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/thetwaihtut/devops-test-assessment.git

# Navigate to the project directory
cd devops-test-assessment
```
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
### Verify the Deployment
To verify that the service is running, use the following command:

```bash
kubectl get services -n dev
```
Notes

* Ensure that the Kubernetes YAML files are correctly configured for your environment.
* Ensure that your ```Dockerfile.dev``` is properly configured for their respective environments.

