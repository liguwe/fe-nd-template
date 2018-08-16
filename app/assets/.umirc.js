/**
 * 具体配置项参考：https://umijs.org/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
 * */
export default {
    // 启用dav方案,并推荐开启 dva-immer 以简化 reducer 编写
    plugins: [
        ['umi-plugin-dva', {immer: true}]
    ],
    outputPath: '../public/assets/',
    disableServiceWorker: true,
};

