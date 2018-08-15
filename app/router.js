module.exports = app => {
    const { router, controller } = app;
    // 处理index页面
    router.get('/', controller.home.index);
    router.get('/list', controller.news.list);
};