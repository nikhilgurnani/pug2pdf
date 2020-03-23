
module.exports = (key, html) => {

    if ( !key ) {

        throw new Error ( '❌ PDFShift API Key is required');

    }

    const pdfshift = require( 'pdfshift' )( key );

    return pdfshift.convert( html, { sandbox: process.env.NODE_ENV != 'production' } );

}
