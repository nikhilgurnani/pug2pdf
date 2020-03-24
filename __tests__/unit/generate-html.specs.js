const test = require( 'ava' );
const { generateHtml } = require( '../../lib' );
const utils = require( '../utils' );

test( '#Library > generates an HTML file based on a Pug file', async t => {

    const _result = await generateHtml( utils.getFixturePath( 'test.pug' ), { name: 'Test User' } );

    t.is( typeof( _result ), 'string', 'the result is a string' );
    t.is( _result, utils.getFixture( 'test.html' ), 'the pug template is correctly rendered' );

} );
