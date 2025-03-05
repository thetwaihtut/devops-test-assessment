## Project Setup

Project root has [`index.js`](/index.js) file. It simulates a simple app that runs infinitely & sends metrics to a [`statsd`](https://github.com/statsd/statsd) server.

## Exercices

  1. Add a `Dockerfile` to containerize the app, with support for multiple environments (DEV, UAT & Production)
  2. Design the cloud infrastructure diagram (prefer AWS) with all the resources that are required for the application(Node app, `statsd` & the backend. Applicants can use any backends for `statsd` eg: `Graphite`). Use ECS or EKS as application platform.
  3. Utilize Terraform to establish infrastructure that adheres to industry-standard security and high availability (HA) practices.
  4. (Optional) Deploy on the cloud computing platforms
