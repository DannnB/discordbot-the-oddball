module.exports = {
  apps : [{
        name: 'db-the-oddball',
        script: 'bot.js',
        watch: '.',
        env: {
                'NODE_ENV': 'development',
        },
        env_production: {
                'NODE_ENV': 'production'
        }
}]
};

