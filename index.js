const path = require( 'path' );
const debug = require( 'debug' )( 'pug2pdf' );
const actions = require ( './lib' );

module.exports = function init( pdfshiftApiKey ) {

    if ( typeof pdfshiftApiKey !== 'string' ) {

        throw new TypeError(
            `Was expecting the API key to be of type string; received: ${ typeof pdfshiftApiKey }` );

    }

    debug( `initialized instance with ${ '#'.repeat( pdfshiftApiKey.length - 4 ) } ${ pdfshiftApiKey.slice( -4 ) }` );

    return async function convert( { pugPath, data = {} } ) {

        if ( typeof pugPath !== 'string' ) {

            throw new TypeError(
                `Was expecting the Pug path to be of type string; received: ${ typeof pugPath }` );

        }

        if ( !path.isAbsolute( pugPath ) ) {

            throw new RangeError( `was expecting "${ pugPath }" to be absolute` );

        }

        if ( typeof data !== 'object' || Array.isArray( data ) ) {

            throw new TypeError(
                `Was expecting the template data to be of type object; received: ${ typeof data }` );

        }

        let _htmlFile = null;

        // Step 1. Generate an HTML file from the PUG File.
        try {

            debug( 'rendering HTML from Pug input' );
            _htmlFile = await actions.generateHtml( pugPath, data );
            debug( 'HTML was successfully rendered from Pug input' );

        } catch ( error ) {

            throw error;

        }

        // Step 2. Convert the HTML file to PDF using PDFShift (https://pdfshift.io)
        try {

            debug( 'calling the PDFShift API to convert HTML to PDF' );
            const _pdfFile = await actions.generatePDF( pdfshiftApiKey, _htmlFile );
            debug( 'PDF generation was successful' );

            return _pdfFile;

        } catch ( error ) {

            throw error;

        }

    };

}