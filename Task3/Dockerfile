# Use an official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Compile TypeScript (optional if test runner supports ts-node)
RUN npm run build || echo "No build step"

# Default command: run tests (customize for your framework)
CMD ["npm", "test"]
