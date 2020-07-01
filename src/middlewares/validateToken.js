const jwt = require( "jsonwebtoken" );

const logger = require( "../utilities/logger" );

const SECRET = "whatever";

module.exports = function( req, res, next ) {
    const token = req.body.token || req.query.token || req.headers[ "access-token" ];

    if ( token ) {
        return jwt.verify( token, SECRET, function( err, decoded ) {
            if ( err ) {
                logger.error( err );
                return res.json( {
                    success: false,
                    message: "Failed to authenticate token.",
                } );
            }
            req.user = decoded;
            return next( );
        } );
    }
    return res.unauthorized( );
};
