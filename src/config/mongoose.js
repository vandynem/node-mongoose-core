const config = require( "./index" );
const mongoose = require( "mongoose" );
const logger = require( "../utilities/logger");

module.exports = function( app ) {
    mongoose.connect( config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } );
    mongoose.Promise = global.Promise;

    process.on( "SIGINT", cleanup );
    process.on( "SIGTERM", cleanup );
    process.on( "SIGHUP", cleanup );

    if ( app ) {
        app.set( "mongoose", mongoose );
        logger.info(`Database is connected`);
    }
};

function cleanup( ) {
    mongoose.connection.close( function( ) {
        process.exit( 0 );
    } );
}
