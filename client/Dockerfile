# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle the app source
COPY . .

# Build the app for production
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Expose port 3000 for the server
EXPOSE 9000

# Command to serve the app
CMD ["serve", "-s", "build", "-l", "9000"]