# ShelterTech Non-Profit Informational Site

> Created with [Gatsby](https://www.gatsbyjs.org/) with content managed in [Prismic](https://prismic.io)

## Development Environment

### Requirements

Docker Desktop

Follow the [Docker installation instructions](https://www.docker.com/get-started) for your OS.

### Installing dependencies

This only needs to be run once on first setup, and once any time the
dependencies in package.json change.

```sh
$ docker-compose run --rm app npm install
```

### Start development web server

```sh
$ docker-compose up
```

This will start the development web server at http://localhost:8000. The
development server will automatically refresh your browser when any source file
is modified.

Press Ctrl + C to exit the development web server.


### Run code lint checks

```sh
# Run this to automatically fix lint issues
$ docker-compose run --rm app npm run lint:fix

# Run this to just check for lint issues without fixing them
$ docker-compose run --rm app npm run lint
```

### Build production site bundle

```sh
$ docker-compose run --rm app npm run build
```

This command will build a bundle of static files that can be deployed directly
to a static web server host. The files will be located in the `./public`
directory.


## Change content in Site

> [ShelterTech Content in Prismic](https://sheltertech.prismic.io/)

