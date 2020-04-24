import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import {Button,} from 'antd';

class Store{
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
const store=new Store();
@observer
class Bar extends Component{
  static propTypes={
    queue:propTypes.array
  }
  render(){
    const queue=this.props.queue;
    console.log("1111",this.props.num)
    return(
      <div>
        <div>
        <Button type="primary" onClick={this.props.refresh.bind(this,"push")}>增加</Button>
      
        数组长度： {queue.length}  数组内容：{String(queue)} 
      <Button type="primary"  onClick={this.props.refresh.bind(this,"pop")}>减少</Button>
      </div>
      <div>
        <Button type="primary" onClick={this.props.changeNum.bind(this,1)}>增加</Button>
      
        数字： {this.props.num} 
      <Button type="primary" onClick={this.props.changeNum.bind(this,-1)}>减少</Button>
      </div>
      </div>
    )
  }
}
@observer
class Foo extends Component{
  static propTypes={
    cache:propTypes.object
  }
  render(){
    return(
      <div><Bar queue={this.props.cache.queue} num={this.props.num} refresh={this.props.refresh}  changeNum={this.props.changeNum}/></div>
    )
  }
}

ReactDOM.render(
  <div>
  <Foo cache={store.cache} refresh={store.refresh} changeNum={store.changeNum} num={store.num}/>
  </div>,
  document.getElementById('root')
)