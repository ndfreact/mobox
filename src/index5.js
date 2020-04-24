import {observable,action} from 'mobx';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class Store{
  cache={queue:[]}
}
const store=new Store();

class Bar extends Component{
  static propTypes={
    queue:propTypes.array
  }
  render(){
    const queue=this.props.queue
    return(
      <span>{queue.length}</span>
    )
  }
}
class Foo extends Component{
  static propTypes={
    cache:propTypes.object
  }
  render(){
    const cache=this.props.cache
    return(
      <div><Bar queue={cache.queue}/></div>
    )
  }
}

ReactDOM.render(
  <div>
  <Foo cache={store.cache}/>
  </div>,
  document.getElementById('root')
)