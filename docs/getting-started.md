# Getting Started

This guide will walk through the steps for getting the application up and
running for local development. There are two development web servers that we
will use during development:

1. [Gatsby](https://www.gatsbyjs.com/), a static website generator, and
2. [Storybook](https://storybook.js.org/), a UI component tool.

The Gatsby development server will serve a copy of the full website, while
Storybook will present the individual UI components used on the site.

There are two supported local development environments: one for macOS, and one
for Docker (which runs on all platforms, including macOS).

_Note that if you are switching between the two environments, you may need to completely delete the `node_modules/` directory._


## macOS Setup

### Requirements

- [nvm, the Node Version Manager](https://github.com/nvm-sh/nvm)

If you don't have nvm installed, you can install it with [Homebrew](https://brew.sh/).

### Installing dependencies

First, clone this repository with Git:

```sh
$ git clone git@github.com:ShelterTechSF/sheltertech.org.git
```

Then, in the newly created sheltertech.org directory, install and switch to the
version of Node.js described in .nvmrc:

```sh
$ cd sheltertech.org
$ nvm install
$ nvm use
```

Whenever you work on this project, you should make sure you have the correct
version of Node.js activated by running `nvm use` within the sheltertech.org
directory.


Then install the Node.js dependencies:

```sh
$ npm install
```


### Running the Gatsby development server

To start the Gatsby development server, run:

```sh
$ npm run start
```

This will start the development web server at http://localhost:8000. The
development server will automatically refresh your browser when any source file
is modified.

To stop the development server, you can simply send an interrupt signal to the
`npm run start` command by pressing Control + C.


### Running the Storybook server

[Storybook](https://storybook.js.org/) is a tool for developing reusable UI
components. When developing a new component, it is recommended to develop it in
Storybook first, since this encourages building it as a modular, isolated
component before including it in the Gatsby-based site.

```sh
$ npm run storybook
```

This will start the development web server at http://localhost:6006. The
development server will automatically refresh your browser when any source file
is modified.

To stop the server, you can simply send an interrupt signal to the
`npm run storybook` command by pressing Control + C.


### Running lint checks

We strictly enforce code style using lint checks that run every time a pull
request is submitted on GitHub. You should run the lint checks frequently while
you are developing on the site so that you catch and fix lint issues before
submitting a pull request.

To run the lint checks and automatically fix any issues that can be
automatically fixed, run:

```sh
$ npm run lint:fix
```


## Docker Setup (cross-platform)

### Requirements

- Docker Desktop -
  Follow the [Docker installation instructions](https://www.docker.com/get-started) for your operting system.
- Git -
  If you do not already have Git installed, please follow the [Git download instructions](https://git-scm.com/downloads) for your operating system.


### Installing dependencies

First, clone this repository with Git:

```sh
$ git clone git@github.com:ShelterTechSF/sheltertech.org.git
```

Then, in the newly created sheltertech.org directory, install the Node.js
dependencies using Docker:

```sh
$ cd sheltertech.org
$ docker-compose run --rm app npm install
```


### Running the Gatsby development server

To start the Gatsby development server, run:

```sh
$ docker-compose up app
```

This will start the development web server at http://localhost:8000. The
development server will automatically refresh your browser when any source file
is modified.

To stop the development server, you can simply send an interrupt signal to the
`docker-compose up app` command by pressing Control + C.


### Running the Storybook server

[Storybook](https://storybook.js.org/) is a tool for developing reusable UI
components. When developing a new component, it is recommended to develop it in
Storybook first, since this encourages building it as a modular, isolated
component before including it in the Gatsby-based site.

```sh
$ docker-compose up storybook
```

This will start the development web server at http://localhost:6006. The
development server will automatically refresh your browser when any source file
is modified.

To stop the server, you can simply send an interrupt signal to the
`docker-compose up storybook` command by pressing Control + C.


### Running lint checks

We strictly enforce code style using lint checks that run every time a pull
request is submitted on GitHub. You should run the lint checks frequently while
you are developing on the site so that you catch and fix lint issues before
submitting a pull request.

To run the lint checks and automatically fix any issues that can be
automatically fixed, run:

```sh
$ docker-compose run --rm app npm run lint:fix
```
