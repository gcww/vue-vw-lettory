# vue-vw-lettory

 该项目为个人移动端H5项目（项目建议手机端打开或浏览器调整成手机调试模式），主要目的为试验新技术的可行性和增强个人代码能力所用。
目前有福利彩票双色球的中奖信息，双色球大盘走势，红蓝号折线图散点图，以及多种抽选号码方式。

## 框架及应用选择：
- 前端架构：vue + scss + postcss + 有赞vantUI 
- 前端插件：echarts、lodash、axios
- 服务端架构：koa2 + mongoose 
- 服务器：阿里云应用服务器

## 项目应用的知识：
1. 通过postcss使用vw来处理移动端适配
2. 使用多种方式来处理1px边线问题
3. 组件化思路处理相似需求
4. 封装Echarts，打造自己的图表组件
5. 使用transition标签配合Animate.css处理动画

## 项目优化：
1. 非核心组件采用组件懒加载和路由懒加载方式
2. 部分第三方组件库采用CDN方式引用
3. 使用babel-plugin-import按需引入UI样式，剔除无用UI组件
4. 当chart resize时通过防抖的方式处理echart组件。
5. 图片压缩合并
6. 服务端开启gzip
## [网页地址](http://47.94.255.23/dist/index.html#/)
```
