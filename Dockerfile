FROM node:20-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
# Create the directories that Strapi needs with correct permissions
RUN mkdir -p /opt/app/src/api /opt/app/.cache /opt/app/public/uploads && \
    chown -R node:node /opt/app
USER node
ENV PATH /opt/node_modules/.bin:$PATH
RUN ["npm", "run", "build"]
EXPOSE 1337
CMD ["npm", "run", "develop"]
