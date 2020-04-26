import {observer} from 'mobx-react';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button,Space,Select,Input,Switch} from 'antd';
import Store7 from '../src/store/store7';
import { observable, computed,autorun,when,reaction } from "mobx";
const  store=new Store7()
autorun(()=>{//自动触发一次，之后没修改此处下监听的元素触发一次，监听此函数下修改的属性值
    //console.log(`autorun监听下拉菜单${store.obj1.name},监听下拉菜单${store.obj.name}`)
   // console.count(`监听input一输入框:${store.inputValue}input二输入框:${store.inputValue1}-------`)
})
reaction(()=>[store.inputValue,store.inputValue1],arr=>{
 // console.count(`reaction监听,数组里边的值每修改一次，触发一次 输入框一：${store.inputValue}输入框二：${store.inputValue1}`)
})
when(()=>store.bool,()=>{
  //只触发一次
    console.count(`when函数是第一个值为真时,自动触发when函数${store.bool}`)
})
@observer
class Foo extends Component{
  arrChange01(ch){
    store.arrChange(ch)
  }
  arrChange02=(ch)=>{
    store.arrChange(ch)
  }
  arrChange11(ch){
    store.arrChange1(ch)
  }
  arrChange12=(ch)=>{
    store.arrChange1(ch)
  }
  handleChange(cur,e,...arr){
 store[cur]=arr["0"]
  }
  InputChange(item,e){
    if(item=="0"){
      store.inputValue=e.target.value
      store.inputValue1=""
    }else{
      store.inputValue=""
      store.inputValue1=e.target.value
    }
    //store.inputValue=e.target.value
  }
onChange(checked) {
    store.bool=!store.bool
  }
  render(){
    return(
      <div>
        <div style={{marginBottom:"24px"}}>
        @action.bound:
        <Space>
        <Button type="primary"  onClick={this.arrChange01.bind(this,"push")}>普通函数数组添加</Button>
        <Button type="primary"  onClick={this.arrChange02.bind(this,"push")}>箭头函数数组添加</Button>
        <Button type="primary"  onClick={store.arrChange.bind(this,"push")}>store函数数组添加</Button>
        </Space>
       <span> 数组长度： {store.arry.length}  数组内容：{String(store.arry)}</span>
        <Space>
      <Button type="primary"  onClick={this.arrChange01.bind(this,"pop")}>普通函数数组移除</Button>
      <Button type="primary"  onClick={this.arrChange01.bind(this,"pop")}>箭头函数数组移除</Button>
      <Button type="primary"  onClick={store.arrChange.bind(this,"pop")}>store函数数组移除</Button>
      </Space>
      </div>

      <div style={{marginBottom:"24px"}}>
      @action:
      <Space>
      <Button type="primary"  onClick={this.arrChange11.bind(this,"push")}>普通函数数组添加</Button>
      <Button type="primary"  onClick={this.arrChange12.bind(this,"push")}>箭头函数数组添加</Button>
        <Button type="primary"  onClick={store.arrChange1.bind(this,"push")}>store函数数组添加</Button>
        数组长度： {store.arry1.length}  数组内容：{String(store.arry1)}
      <Button type="primary"  onClick={this.arrChange11.bind(this,"pop")}>普通函数数组移除</Button>
      <Button type="primary"  onClick={this.arrChange12.bind(this,"pop")}>箭头函数数组移除</Button>
      <Button type="primary"  onClick={store.arrChange1.bind(this,"pop")}>store函数数组移除</Button>
      </Space>
      </div>
      <div style={{marginBottom:"24px"}}>
        <Button type="primary" onClick={store.changeNum.bind(this,1)}>增加</Button>

        数字： {store.num}
      <Button type="primary" onClick={store.changeNum.bind(this,-1)}>减少</Button>
      </div>
     <Space>
       <label>下拉菜单computed</label>
     <Select value={store.obj01}
     style={{ width: 120 }} onChange={this.handleChange.bind(this,"obj")}>
     {store.arryList.map((item)=>{
       return(
        <Select.Option  value={item.name} 
                          key={item.id} 
                          id={item.id} 
                          code={item.code}
                          name={item.name}>{item.name}</Select.Option>
       )
     })}
    </Select>

    <label>下拉菜单computed</label>
     <Select  value={store.obj11}
     style={{ width: 120 }} onChange={this.handleChange.bind(this,"obj1")}>
     {store.arryList.map((item)=>{
       return(
        <Select.Option value={item.name} 
                         key={item.id} 
                         id={item.id} 
                         code={item.code}
                         name={item.name}>{item.name}</Select.Option>
       )
     })}
    </Select>
    <Input value={store.inputValue} onChange={this.InputChange.bind(this,"0")}/>
    <Input value={store.inputValue1} onChange={this.InputChange.bind(this,"1")}/>
    <Switch  onChange={this.onChange} checked={store.bool}/>
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