import { observable, computed,autorun,when,reaction } from "mobx";

class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();
  @observable string = "helloworld";
  @observable string1 = "helloworld";
  @observable number = 1234;
  @observable number1 = 1234;
  @observable bool = false;
  @computed get mixed(){
      console.log("函数内 computed的mixed")
    return this.string + "/" + this.number+this.bool;
  }
}

var store = new Store();
// var foo = computed(() => {
//   return store.string + "/" + store.number;
// });
// foo.observe((change) => {//每次修改的时候触发监听此函数下修改的属性值
//     console.log("computed方法监听string,number修改",change)
// });
// store.string="123456789"
// store.number=987654321

// autorun(()=>{//自动触发一次，之后没修改一次触发一次，监听此函数下修改的属性值
//     console.log("autorun",`数值${store.number1}`,`字符串${store.string1}`)
// })
// autorun(()=>{//此方法是数值全修改完触发
//     console.log("监听computed的autorun",store.mixed)
// })
//  store.string1="修改后字符串"
//  store.number1="修改后数字"
// when(()=>store.bool,()=>{
//     console.log("when函数是第一个值为真时,自动触发when函数")
// })
// store.bool=true
reaction(()=>[store.string,store.number],arr=>{
    console.log("reaction监听,数组里边的值没修改一次，触发一次")
})
store.string="1111111111111111111111";
store.number=222222222222222222222