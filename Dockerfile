# Base Image
FROM node:18-alpine
# Working Directory
WORKDIR /app
# Copy package.json to /app
COPY package.json .
# npm install
RUN npm install
# Copy all files
COPY . .
# Port Expose
EXPOSE 3000
# Run the code
CMD [ "npm","start" ]
