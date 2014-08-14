/* ========================================================================
 * StorageAPI: index.js v0.0.1
 * Author: Mike Grabowski (@grabbou)
 * Created at: 14/08/2014
 * ========================================================================
 * Description: Abstract StorageAPI client provider. Ensures all of the
 * providers integrated within that package implement all of the required
 * methods. Every package needs to inherit from that abstract one to work.
 * ========================================================================
 */

/* jshint unused: false */

(function () {
    'use strict';

    /**
     * Initializes StorageClient, connection and saves config
     * @param config {Object} containing provider-specific data
     * @constructor
     */
    function StorageClient (config) {
        if (this.constructor === StorageClient) {
            throw new Error('StorageClient: Cannot initialize abstract class');
        }

        this.config = config;
    }

    StorageClient.prototype = {

        /**
         * Uploads given file
         * @param file {Blob} file to save
         * @param filename {String} name of the file
         * @param callback {Function} to invoke after completing
         * @abstract
         */
        upload: function (file, filename, callback) {
            throw new Error('Cannot invoke abstract method');
        },

        /**
         * Removes given file
         * @param filename {String} filename to delete
         * @param callback {Function} to invoke after completing
         * @abstract
         */
        remove: function (filename, callback) {
            throw new Error('Cannot invoke abstract method');
        },

        /**
         * Checks whether given file exists
         * @param filename {String} filename to check
         * @param callback {Function} to invoke after completing
         * @return {Boolean} true if file exists, false otherwise
         * @abstract
         */
        exists: function (filename, callback) {
            throw new Error('Cannot invoke abstract method');
        }

    };

    module.exports = StorageClient;

})();
