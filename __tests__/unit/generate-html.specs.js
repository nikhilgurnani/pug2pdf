const test = require( 'ava' );
const { generateHtml } = require( '../../libs');

test( 'Libs#generate-html > generates an HTML file stream based on Pug file', async t => {

    let _result = await generateHtml( `${__dirname}/../utils/test.pug`, { name: 'Test User' } );

    t.is( typeof(_result), 'string', 'The result is a String' );

} );
