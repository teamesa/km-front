FROM node:17

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "start"