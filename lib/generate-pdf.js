const PDFShift = require( 'pdfshift' );

module.exports = ( key, html ) => PDFShift( key ).convert( html );
