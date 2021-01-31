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

- `lint:fix` - Automatically fix CSS, TypeScript, and JavaScript lint issues. Note that
  if an error is encountered in CSS, it will not run the TypeScript/JavaScript lint checks.
- `lint` - Check, but do not fix, both CSS, TypeScript, and JavaScript lint issues
- `stylelint:fix` - Automatically fix CSS lint issues
- `stylelint` - Check, but do not fix, CSS lint issues
- `tsc` - Run the TypeScript compiler (`tsc`) to check for type errors
- `eslint:fix` - Automatically fix JavaScript lint issues
- `eslint` - Check, but do not fix, JavaScript lint issues

### Run tests

```sh
$ npm run test
```

This command will currently run the
[Storybook StoryShots](https://storybook.js.org/docs/react/workflows/snapshot-testing)
tests in
[render-only mode](https://github.com/storybookjs/storybook/blob/v6.0.26/addons/storyshots/storyshots-core/README.md#renderonly).
We do this just to get basic testing for things like prop-types checking for all
Storybook stories than using the actual snapshot testing functionality.
