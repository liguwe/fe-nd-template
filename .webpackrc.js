/**
 * 具体配置可参考https://umijs.org/config/#webpack
 * */
export default {
    "proxy": {
        "/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": {"^/api": ""}
        }
    },
    "manifest": {
        "fileName": "../../config/manifest.json"
    },
}
