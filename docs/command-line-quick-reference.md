# Command-line Quick Reference

This document lists commands that commonly used during development.

_Note that if you are running in the Docker environment, you should prefix any npm commands with `docker-compose run --rm app`._

## Gatsby Commands

### Start Gatsby development web server

```sh
$ npm run start
```

In the Docker environment, launch the Docker service instead:

```sh
$ docker-compose up app
```

### Build production site bundle

```sh
$ npm run build
```


## Storybook Commands

### Start Storybook development web server

```sh
$ npm run storybook
```

In the Docker environment, launch the Docker service instead:

```sh
$ docker-compose up storybook
```


## General Commands

### Install dependencies

```sh
$ npm install
```

You may need to rerun this command if the dependencies have been changed since
the last time you installed them.

### Run code lint checks

```sh
# Run this to automatically fix lint issues
$ npm run lint:fix
```

There are six variants of the command in case if you want to run something more
specific. The commands are:

- `lint:fix` - Automatically fix both CSS and JavaScript lint issues. Note that
  if an error is encountered in CSS, it will not run the JavaScript lint check.
- `lint` - Check, but do not fix, both CSS and JavaScript lint issues
- `stylelint:fix` - Automatically fix CSS lint issues
- `stylelint` - Check, but do not fix, CSS lint issues
- `eslint:fix` - Automatically fix JavaScript lint issues
- `eslint` - Check, but do not fix, JavaScript lint issues
