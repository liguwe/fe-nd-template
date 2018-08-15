const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const dataList = {
            list: [
                {
                    id: 1,
                    time: 1533897066110,
                    title: 'this is news 1',
                    url: '/news/1'
                },
                {
                    id: 2,
                    time: 1533897066110,
                    title: 'this is news 2',
                    url: '/news/2'
                }
            ],
            time:1533897066110
        };
        await this.ctx.render('news/list.html', dataList);
    }
}

module.exports = NewsController;


