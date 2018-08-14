/**
 * 具体配置可参考https://umijs.org/config/#webpack
 * */
export default {
    "publicPath": "/static/",
    "proxy": {
        "/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }
    },
}
