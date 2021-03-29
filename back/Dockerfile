FROM node:lts-alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
COPY ["../package.json", "yarn.lock", "./"]
RUN yarn

# Copy app source to working folder
COPY . .

EXPOSE 3001
CMD [ "yarn", "start" ]