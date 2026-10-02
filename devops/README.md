
# ZenGen – DevOps Case Study

## Project Overview
ZenGen is a mental health prediction platform developed using React, TypeScript, Node.js, and Express.

## DevOps Tools
- Git and GitHub
- GitHub Actions
- Docker
- Kubernetes
- Ansible
- Prometheus

## Implementation



### 1. CI/CD Pipeline
GitHub Actions automates dependency installation, TypeScript checking, and application build.

### 2. Configuration Management
Ansible playbook defines system packages, an application directory, a service user, and configuration settings.

### 3. Containerization and Orchestration
Dockerfile defines the application container. Kubernetes Deployment and Service YAML files describe application replicas and network access.

### 4. Monitoring
Prometheus configuration defines a 15-second scrape interval and a target for the ZenGen metrics endpoint.

## Important Note
The configuration files are prepared for the case study. Actual execution, deployment, monitoring, and rollback must be verified before claiming successful results.

## Conclusion
This case study demonstrates how DevOps practices can support automated builds, repeatable configuration, containerization, orchestration, and monitoring.