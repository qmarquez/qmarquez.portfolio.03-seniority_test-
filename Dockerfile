FROM node:13

WORKDIR /app/dummy_mailer

# Copy only package.json and package-lock.json to prevent code change from invalidating dependency installation cache.
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
RUN npm install

EXPOSE 80

COPY . .