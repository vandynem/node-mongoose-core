require( "./model" );
const validateToken = require( "../../middlewares/validateToken" );
const controller = require( "./controller" );
const express = require( "express" );
const router = express.Router( );

router.post( "/registration", controller.register );
router.post( "/login", controller.login );
router.post( "/get-all", controller.getAll );
router.post( "/find", validateToken, controller.getOwnerData );

module.exports = router;
