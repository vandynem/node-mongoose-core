module.exports = {
    host: "127.0.0.1",
    port: 1234,
    mongoUrl: process.env.CONNECTION_STRING,
    logLevel: process.env.LOG_LEVEL,
    secret: process.env.SECRET,
};
