# Petstore Testing Project

A test automation project for validating user creation via a REST API. This project uses a clean, modular structure and modern testing tools to ensure high reliability and maintainability.

---

## Getting Started

## Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (optional, for containerized testing)

### Run The Application To Test
```
docker run --name swaggerapi-petstore3 -d -p 8080:8080 swaggerapi/petstore3:unstable
```

### Installation

```
# Clone the repository
git clone https://github.com/siddharth23/siddharth-kala.git
cd Task3

# Install dependencies
npm install

```

### Run All Tests
```
npm test
```

### Docker Run All Tests

```
docker build -t typescript-tests .
docker run --rm  -v "$(pwd)/report:/app/report"  --network="host" typescript-tests

```

### Reporting (Report Will Get Generated In Below Location)

```
./report/report.html
```

## Tech Stack & Approach

### Tech Stack

- **Language**: `TypeScript` – Chosen for its type safety, scalability, and excellent tooling support and faster execution.
- **HTTP Testing**: `Supertest` – Simplifies testing REST APIs by chaining HTTP requests and expectations.
- **Containerization**: `Docker` – Allows consistent, isolated environments for local and CI testing.

---