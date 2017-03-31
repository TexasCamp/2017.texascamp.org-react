## Texas Camp React Repo

## Getting up and running locally:

From the command line find this repository.

Run `yarn` or `npm install` (yarn is faster).

Run `yarn start` or `npm start`

!Important!
Open: http://0.0.0.0:8080/
Do not use: http://0.0.0.0:8080/webpack-dev-server/
The second url puts everything in an iframe and it breaks a lot of things.
Thanks for catching this Maria!


## WIP: Getting up and running on Amazee-io domain:

This project is currently using the amazeeio/docker-centos7-nginx:nginx18
docker image.

To spin up the site:
`docker-compose up -d`

To access the site go to:
`http://localhost:8080`
