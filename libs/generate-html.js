const pug = require( 'pug' );

module.exports = ( pugPath, data = {} ) => {

    return pug.renderFile( pugPath, data );

};