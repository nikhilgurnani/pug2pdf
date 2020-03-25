const fs = require( 'fs' );
const path = require( 'path' );

exports.getFixturePath = fixtureName => path.join( __dirname, 'fixtures', fixtureName );
exports.getFixture = fixtureName => fs.readFileSync( exports.getFixturePath( fixtureName ), 'utf8' );