import {observable,action,computed,autorun} from 'mobx';
 class Store5{
    constructor(){}
    @observable arry=[];
    @observable arry1=[];
    @observable arryList=[{id:"1",code:"11",name:"111"},{id:"2",code:"22",name:"222"},{id:"3",code:"33",name:"333"},{id:"4",code:"44",name:"444"}];
    @observable obj={};
    @observable obj1={};
    @observable cache={queue:[]};
    @observable num=1;
    @observable inputValue=undefined;
    @observable inputValue1=undefined;
    @observable bool=false;
    @action.bound arrChange(ch){
      console.log(`@action.bound`,this)
      if(ch=="push"){
        this.arry.push(this.arry.length)
      }else if(ch=="pop"){
        this.arry.pop()
      }
     
    }
    @action arrChange1(ch){
      console.log(`@action`,this)
      if(ch=="push"){
        this.arry1.push(this.arry1.length)
      }else if(ch=="pop"){
        this.arry1.pop()
      }
     
    }
    @action.bound changeNum(ch){
      this.num=this.num+ch
    }

    @computed get obj01(){
      console.count("监听this.obj的值变化")
      if(typeof(this.obj)=="object"){
       return this.obj.value
      }
    }
    @computed get obj11(){
      console.count("监听this.obj1的值变化")
      if(typeof(this.obj1)=="object"){
        return this.obj1.value
      }
    }
}
// autorun((change)=>{
//   console.count("检测变化")
//   console.log(change)
//   debugger
//   console.log(new Store5().obj11)
// })
export default Store5