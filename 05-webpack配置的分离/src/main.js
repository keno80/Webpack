import {add, mul} from './js/math'
import * as perInfo from './js/info'  //将info的所有信息作为导入

console.log(add(10, 20));
console.log(mul(10, 20));

console.log(perInfo.name);
console.log(perInfo.age);
console.log(perInfo.height);

//依赖CSS文件
require('./css/normal.css')

//依赖SCSS文件
require('./css/spec.scss')

//引入vue
import Vue from 'vue'
import App from "./vue/App";

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

