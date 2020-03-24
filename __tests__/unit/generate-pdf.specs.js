const test = require( 'ava' );
const nock = require( 'nock' );
const { generatePDF } = require( '../../lib' );
const utils = require( '../utils' );

test( '#Library > generates an PDF file based on an HTML file', async t => {

    const _responsePayload = {
        duration: '3121.766417985782',
        filesize: '259972',
        response: {
            duration: '2562',
            'status-code': '200',
        },
        success: true,
        url: 'https://s3.amazonaws.com/pdfshift/d/2/2019-05/99c456250a01448686d81752a3fb5beb/15466098-8368-49e1-ac33-ff4c3941a0df.pdf',
    };

    nock( 'https://api.pdfshift.io/v2' )
        .post( '/convert/' )
        .reply( 200, _responsePayload );

    const _result = await generatePDF( 'XXXXXXXXXXXXXXXXXXXXXX', utils.getFixturePath( 'test.html' ) );

    t.is( typeof( _result ), 'object', 'the result is an object' );
    t.deepEqual( _result, _responsePayload, 'the response is deeply equal to the mocked parameters' );

} );
