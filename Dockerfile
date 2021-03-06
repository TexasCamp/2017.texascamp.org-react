FROM amazeeio/centos7-node-builder:6 as builder

RUN yum install -y bzip2

# Use changes to package.json and yarn.lock to see if Docker should use cached nodejs deps.
COPY package.json yarn.lock /app/

# Run yarn install
RUN yarn install --pure-lockfile

FROM amazeeio/centos7-node:6
COPY --from=builder /app/node_modules /app/node_modules

# Use production mode for building and running the app (code minification, etc.).
ENV NODE_ENV production
ENV PORT 3000

# Now copy in our application code.
COPY . /app

# All of the other env variables (API, etc.) are injected at run-time.
RUN yarn run build && fix-permissions /app
CMD yarn run host
