# Use Node.js official LTS image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the API port
EXPOSE 8080

# Start the server
CMD ["node", "app.js"]