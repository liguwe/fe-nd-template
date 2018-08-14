// 指定渲染模板引擎为ejs , you also use multiple view engine
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};
// egg-view-assets 提供了通用的静态资源管理和本地开发方案
exports.assets = {
    enable: true,
    package: 'egg-view-assets',
};