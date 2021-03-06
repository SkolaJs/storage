// Simple initialization
var Storage = require('../lib'),
	async = require('async');

Storage.init({
	custom: {
		provider: Storage.Providers.MongoDB,
		database: 'test'
	}
});

Storage.pre('custom', 'upload', function (done, fileSrc) {
	console.log('pre' + fileSrc);
	done();
});

Storage.pre('upload', function (done, fileSrc) {
	console.log('generic pre' + fileSrc);
	done();
});

Storage.get('custom', function (err, client) {
	async.waterfall([
		function uploadFile(callback) {
			client.upload('../LICENSE', 'testing/license.md', function (err) {
				callback(err);
			});
		},
		function downloadFile(callback) {
			client.download('testing/license.md', 'license2.md', function (err) {
				callback(err);
			});
		},
		function cleanUp(callback) {
			Storage.exit(callback);
		}
	], function (err) {
		if (err) {
			console.log('Error - ', err);
		} else {
			console.log('Successful');
		}
	});

});





