/**
 * config.default.js 为默认的配置文件，所有环境都会加载这个配置文件
 * 一般也会作为开发环境的默认配置文件
 * */

module.exports = (appInfo) => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1513765449219_5858';

    // add your config here
    config.middleware = [];

// 配置渲染模板
    config.view = {
        mapping: {
            '.html': 'nunjucks'
        },
    };


// 新闻列表接口配置
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };

    config.assets = {
        publicPath: '/public/',
        devServer: {
            debug: false,
            command: 'umi dev',
            port: 8000,
            env: {
                APP_ROOT: process.cwd() + '/app/assets',
                BROWSER: 'none',
                ESLINT: 'none',
                SOCKET_SERVER: 'http://127.0.0.1:8000',
                PUBLIC_PATH: 'http://127.0.0.1:8000',
            },
        },
    };

    config.security = {
        csrf: false,
    };

    return config;
};
