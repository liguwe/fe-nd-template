// 指定渲染模板引擎为nunjucks , you also use multiple view engine
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
// egg-view-assets 提供了通用的静态资源管理和本地开发方案
exports.assets = {
    enable: true,
    package: 'egg-view-assets',
};