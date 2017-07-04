var args = require('minimist')(process.argv.slice(2));
var env = 'dev';
var allowedEnv = ['dev', 'prod'];
if (args.env) {
    env = args.env;
}

function buildConfig(env) {
    var isValid = env && env.length > 0 && allowedEnv.indexOf(env) > -1;
    var validEnv = isValid ? env : 'dev';
    return require(`./conf/${validEnv}.js`);
}
module.exports = buildConfig(env);