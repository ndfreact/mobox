# mobox 优点
1. 开发难度低
2. 开发代码量少
3. 渲染性能好
   * 应用逻辑只需要修改状态数据，mobx会自动触发渲染UI等副作用；副作用依赖的数据是被自动收集的，比如副作用依赖状态a和b，状态c的变化是不会触发副作用的
```
mkdir src
cd src
md image
echo "" >index.js
cd ..
npm init -y
cnpm i webpack webpack-cli babel-core babel-preset-env babel-loader -D
```


1. @action 和@action.bound的区别
   * 绑定：如何在结果函数中绑定它,原型：如果生成的函数在原型中
   * @action保留原始函数的绑定和原型包含.如果原始函数未绑定,则结果不会,反之亦然.如果原始函数不在原型中,结果将不会,反之亦然.
   * @ action.bound将始终生成一个绑定的函数,该函数位于原型中