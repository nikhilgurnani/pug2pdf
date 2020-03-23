const test = require( 'ava' );
const { generatePDF } = require( '../../libs');


test( 'Libs#generate-pdf > generates an PDF file stream based on HTML file', async t => {

    let key = 'XXXXXXXXXXXXXXXXXXXXXX';

    let _result = await generatePDF( key, '<html><body><h1> This is an HTML page in a PDF </h1></body></html>' );

    t.is( typeof(_result), 'object', 'The result is an object.' );



} );
