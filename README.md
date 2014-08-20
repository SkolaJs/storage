Storage.js [![Travis-Ci](https://travis-ci.org/keystonejs/storage.js.svg)](https://travis-ci.org/keystonejs/storage.js)&nbsp;[![Code Climate](https://codeclimate.com/github/keystonejs/storage.js/badges/gpa.svg)](https://codeclimate.com/github/keystonejs/storage.js)&nbsp;[![Test Coverage](https://codeclimate.com/github/keystonejs/storage.js/badges/coverage.svg?v=2)](https://codeclimate.com/github/keystonejs/storage.js)&nbsp;[![Dependency Status](https://gemnasium.com/keystonejs/storage.js.svg)](https://gemnasium.com/keystonejs/storage.js)
==========

Storage.js is a NodeJS library that standarizes common available via `npm` libraries like `pkgcloud` and abstracts away differences (especially within callbacks). Just write a simple implementation and leave configuration up to your users.

* Available storage providers:
	* Rackspace
	* Amazon
	* Azure
	* Openshift
	* HP
	* Local disk
	
* To be included soon:
	* MongoDB

* After initial release
	* (S)FTP - due to lack of nice, up-to-date modules, this is for now on hold.

> More providers will be added by community requests (feel free to create an issue). 

## Installation

*Note: Work in progress*. Although it's still work in progress, feel free to fork or do the custom install via `npm`. Further details will be published soon.

## Configuration

After requiring for the first time, invoke `init` method by passing configuration object.

```js
var Storage = require('storage');
Storage.init({
	amazon: {
		container: '',
		key: '',
		keyId: ''
});
```
It can be either multidimensional array containing provider name as a key (useful when you are going to use multiple providers) as shown above or default, global config, like the one below:

```js
var Storage = require('storage');
Storage.init({
 		container: '',
 		key: '',
 		keyId: ''
});
```

Every storage provider requires slightly different parameters. See sections below for further information.

## Usage

To get an instance of current client, simply call `obtain()` on your `Storage` object.

```js
var Storage = require('storage');

var client = Storage.obtain();

client.upload(...);
```

`Obtain()` method can accept provider to retrieve (`String`) as a parameter. In case it's undefined, method looks for `process.env.storage` for default value.

## Motivation

If you ever wanted to implement storage integration right in your application - we got you covered. You've probably encountered problems with different libraries, especially if you wanted to integrate two or three providers, just to give your users a better choice. That's why `Storage.js` was created. Wrapping multiple libraries and creating simple abstraction layer for them allows you to easily add about 5 providers at once!

## API Reference

Will be published soon as a 'Readme.md' file under `lib` dir.

## Tests

With our 100% code coverage, we believe they are important. To run them by yourself, simply type `npm test`. For code coverage, use `gulp coverage`. Remember to delete html files generated by that command by executing `gulp remove-coverage`.

## Contributors

You are welcome! Feel free to submit bugs, create issues and do pull requests. Take a look at our Api reference located above and dive into the project. Feels like we are missing another provider? Just do it!

## Thanks

Special thanks to maintainers of:
- [`pkgcloud`](https://github.com/pkgcloud/pkgcloud) for providing cloud integrations for Azure, HP, Rackspace, OpenShift and Amazon.

## License

Project licensed under MIT (*See LICENSE for further details*)
