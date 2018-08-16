# fe-nd-template

newsdog前端样板文件

## master分支


node.js端基于`egg.js`，前端基于`umi.js(dva.js)`的SPA方案。


## 开发说明：

1、css样式文件统一使用`less`，并统一成css mudule方案

2、模板引擎统一使用`nunjucks`

3、**约定目录：**

```bash
├── README.md  
├── app 
│   ├── assets  # 基于umi.js + dva.js的前端工程
│   │   ├── components  # 公用React组件库
│   │   ├── global.js   # 全局引用，如可以在这里加入 polyfill
│   │   ├── global.less # 全局样式
│   │   ├── layouts     # 全局布局组件
│   │   ├── mock        # 本地dev环境下mock数据
│   │   ├── models
│   │   │   └── global.js 
│   │   ├── pages
│   │   │   ├── 404 # 404页面
│   │   │   ├── 404 # 404页面
│   │   │   ├── 500 # 500页面
│   │   │   └── users
│   │   │       ├── components
│   │   │       ├── services
│   │   │       ├── models
│   │   │       └── index.js
│   │   ├── plugins
│   │   ├── services
│   │   ├── themes
│   │   └── utils
│   ├── controller
│   ├── extend
│   ├── middleware
│   │   └── robot.js
│   ├── public
│   ├── router.js
│   ├── service
│   └── view
├── config
│   ├── config.default.js
│   ├── config.prod.js
│   ├── manifest.json
│   └── plugin.js
├── package.json
```

> 其他样板文件请查看其他分支



## 其他分支

### umi分支

umi + dva 纯前端方案，最终部署到非Node.js服务上。



### React SSR 方案






