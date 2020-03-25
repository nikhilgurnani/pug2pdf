const test = require( 'ava' );
const Core = require( '../../index' );

test( '#Core > throws an error if the API key is not present or is invalid', t => {

    t.throws( () => {

        Core();

    }, { instanceOf: TypeError }, 'the correct error is thrown when no API key is passed' );

    t.throws( () => {

        Core( null );

    }, { instanceOf: TypeError }, 'the correct error is thrown when null is passed' );

    t.throws( () => {

        Core( {} );

    }, { instanceOf: TypeError }, 'the correct error is thrown when an object passed' );

} );

test( '#Core > throws an error if the template path is invalid', async t => {

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: undefined } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when no pugPath is passed' );

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: null } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when null is passed' );

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: {} } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when an object is passed' );

} );

test( '#Core > throws an error if the template path is not absolute', async t => {

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: './test.pug' } );

    }, { instanceOf: RangeError }, 'the correct error is thrown when a relative path is provided' );

} );

test( '#Core > throws an error if the template data is not valid', async t => {

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: '/test.pug', data: 'test' } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when a string is passed to the data option' );

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: '/test.pug', data: [] } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when an array is passed to the data option' );

    await t.throwsAsync( async () => {

        await Core( 'test' )( { pugPath: '/test.pug', data: false } );

    }, { instanceOf: TypeError }, 'the correct error is thrown when a boolean is passed to the data option' );

} );