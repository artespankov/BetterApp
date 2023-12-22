// figure out whether we're in PROD or DEV env

if (process.env.NODE_ENV === 'production') {
    // return PROD keys
    module.exports = require('./prod');
}
else {
    // return DEV keys
    module.exports = require('./dev');
}