FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose Vite port
EXPOSE 5173

# Start dev server with explicit host and port
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]