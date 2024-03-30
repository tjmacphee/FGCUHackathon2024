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

# Expose port 5000 for the server
EXPOSE 9001

# Command to run the app
CMD ["node", "server.js"]