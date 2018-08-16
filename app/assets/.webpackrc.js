/**
 * 具体配置可参考https://umijs.org/config/#webpack
 * */
export default {
    "proxy": {
        "/proxy/api/": {
            // 设置指向到test环境或者prod环境
            "target": "http://127.0.0.1:7001",
            "changeOrigin": true,
            "pathRewrite": {"^/api": ""}
        }
    },
    "manifest": {
        "fileName": "../../../config/manifest.json"
    },
}
