//babel-loader加载的配置文件用来处理 es6，ts，react等等

const presets = [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
];
const plugins =  []
const isProduction = process.env.NODE_ENV === 'production' ;

if(!isProduction){
  //开发环境
  // console.log('进来');
  plugins.push(["react-refresh/babel"]);
}

module.exports = {
  //react组件热更新
  presets,
  plugins
}