/**
 * Module dependencies.
 */
var OAuth2Strategy = require('./oauth2');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Strategy = OAuth2Strategy;
