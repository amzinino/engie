FROM node:lts-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ["../package.json", "yarn.lock", "./"]
RUN yarn

# Copy app source to working folder
COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]