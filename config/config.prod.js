// 配置 logger 文件的目录，logger 默认配置由框架提供
exports.logger = {
    // todo 配置日志点
    // dir: '/home/admin/logs/demoapp',
};

// 启动配置项
exports.cluster = {
    listen: {
        port: 8002,
        hostname: '127.0.0.1',
        // path: '/var/run/egg.sock',
    }
};