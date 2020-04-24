import {observer} from 'mobx-react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button,Space} from 'antd';
import Store6 from '../src/store/store6';
const  store=new Store6()
@observer
class Foo extends Component{
  render(){
    return(
      <div>
        <Space>
        <div>
        <Button type="primary"  onClick={store.refresh.bind(this,"push")}>增加</Button>
        数组长度： {store.cache.queue.length}  数组内容：{String(store.cache.queue)}
      <Button type="primary"  onClick={store.refresh.bind(this,"pop")}>减少</Button>
      </div>
      <div>
        <Button type="primary" onClick={store.changeNum.bind(this,1)}>增加</Button>

        数字： {store.num}
      <Button type="primary" onClick={store.changeNum.bind(this,-1)}>减少</Button>
      </div>
      </Space>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
  <Foo />
  </div>,
  document.getElementById('root')
)