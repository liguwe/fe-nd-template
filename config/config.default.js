exports.keys = '<此处改为你自己的 Cookie 安全字符串>';

// 配置渲染模板
exports.view = {
    mapping: {
        // 必须配置文件后缀和模板引擎的映射，否则无法找到对应的模板引擎，但是可以使用 defaultViewEngine 做全局配置
        '.ejs': 'ejs',
        defaultViewEngine: 'ejs',
        // 配置了 defaultExtension 可以省略后缀
        defaultExtension: '.ejs',
        // .html 文件也通过ejs模板引擎渲染
        // '.html': 'ejs',
    },
};


// 新闻列表接口配置
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.assets = {
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
