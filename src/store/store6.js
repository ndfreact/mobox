import {observable,action} from 'mobx';
export default class Store5{
    constructor(){}
    @observable cache={queue:[]};
    @observable num=1;
    @action.bound refresh(ch){
      if(ch=="push"){
        this.cache.queue.push(this.cache.queue.length)
      }else if(ch=="pop"){
        this.cache.queue.pop()
      }
     
    }
    @action.bound changeNum(ch){
      this.num=this.num+ch
    }
}