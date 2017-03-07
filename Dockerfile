FROM amazeeio/centos7-node:node6

# Use changes to package.json and yarn.lock to see if Docker should use cached nodejs deps.
COPY package.json yarn.lock /app/

# Run yarn install and remove the .yarn-cache as we don't need that on our image.
RUN yarn install --pure-lockfile && rm -rf $HOME/.cache/yarn

# Use production mode for building and running the app (code minification, etc.).
ENV NODE_ENV production

# Now copy in our application code.
COPY . /app

# All of the other env variables (API, etc.) are injected at run-time.
RUN yarn run build && chmod g+rw -R /app
CMD yarn run host
