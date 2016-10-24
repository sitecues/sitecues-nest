# sitecues-nest [![Build status for sitecues-nest on Circle CI.](https://img.shields.io/circleci/project/sitecues/sitecues-nest/master.svg "Circle Build Status")](https://circleci.com/gh/sitecues/sitecues-nest "Sitecues Nest Builds")

> Serve the builds of a project.

## Why?

 - Can serve any project with a `build` directory.
 - Flexible, as it searches upwards to find projects.
 - Provides creature comforts like directory listings.

## Install

As a dependency:

```sh
npm install sitecues/sitecues-nest --save
```

As a project to work on:

```sh
git clone git@github.com:sitecues/sitecues-nest.git &&
cd sitecues-nest &&
npm link
```

## Usage

### Command line

```sh
$ nest --help

  Usage
    $ nest

  Option
    --port           Listen on a specific HTTPS port for requests.
    --insecure-port  Listen on a specific HTTP port for requests.
    --target         Open a specific build in your browser.
    --open           Open the server root in your browser.

  Example
    $ nest
    Build available at https://localhost/
    $ nest --port=7000
    Build available at https://localhost:7000/
```

### Programmatic

Get it into your program.

```js
const Nest = require('sitecues-nest');
```

Start the server.

```js
const server = new Nest();
server.start().then(() => {
  console.log('Listening.');
});
```

## API

### Nest(option)

Returns a new server instance.

#### option

Type: `object`

Server configuration.

##### port

Type: `number`<br>
Default: `443` if run as root, otherwise `3000`

The HTTPS port that the server will listen on when `.start()` is called.

##### insecurePort

Type: `number`<br>
Default: `80` if run as root, otherwise `3000`

The HTTP port that the server will listen on when `.start()` is called.

##### tls

Type: `object`<br>
Default: `key`/`cert` combo for `localhost`

The [encryption settings](https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener) used for HTTPS connections.

## Contributing

See our [contributing guidelines](https://github.com/sitecues/sitecues-nest/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sitecues/sitecues-nest/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sitecues/sitecues-nest/compare "Submit code to this project for review.").

## License

Copyright © [Sitecues](https://sitecues.com "Owner of sitecues-nest."). All rights reserved.
