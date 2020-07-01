const usersRouter = require( "./users/router" );

module.exports = ( app ) => {
    app.use( "/users", usersRouter );
    // app.use( "/articles", validateToken, articlesRouter );
};
