const actions = require ( './libs' );

module.exports = function init( pdfshiftApiKey ) {

    if ( !pdfshiftApiKey ){

        throw new Error( '‼️ PDFShift api key is required.');

    }


    async function convert ( { pugPath, data = { }, eventArgs } ) {

        if ( !pugPath)
            throw new Error( '‼️ Absolute Path for the PUG file is required.' );

        let _htmlFile = null;

        // Step 1. Generate an HTML file from the PUG File.
        try {

            _htmlFile = await actions.generateHtml( pugPath, data );

            console.log( '🎉 HTML rendered successfully! ');

        } catch ( error ) {

            console.error( '❌ Error in generating HTML File from Pug File' );

            throw error;

        }

        // Step 2. Convert the HTML file to PDF using PDFShift (https://pdfshift.io)

        try {

            const _pdfFile = await actions.generatePDF( pdfshiftApiKey, _htmlFile );

            console.log( '🎉 PDF generated successfully!' );

            return _pdfFile;

        } catch ( error ) {

            console.error( '❌ Error in generating PDF File from HTML File' );

            throw error;

        }

    };

    return convert;


}