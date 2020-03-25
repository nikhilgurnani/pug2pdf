const pug = require( 'pug' );

module.exports = ( pugPath, data = {} ) => pug.renderFile( pugPath, data );