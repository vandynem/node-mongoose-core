require( "./validateInput" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

router.post( "/registration", controller.register );

module.exports = router;
