import {observable,isArrayLike} from 'mobx'


const arr=observable([1,2,3,4,5,6])

console.log(arr,`是否是数组：${Array.isArray(arr)}`,`是否是mobx数组：${isArrayLike(arr)}`)
console.log(arr["0"],arr["1"])
console.log(arr.pop(),arr.push("!!!!!!!!!!!!"),arr)
console.log("数组越界访问",arr["7"])


const obj=observable({a:"1",b:"2",c:"3"})
console.log(obj.a,obj.b)
console.log("对象越界访问",obj.d)

let num=observable.box(20)
let str=observable.box("abcde")
let bool=observable.box(true)
console.log("返回observable",num,str,bool)
console.log("返回正常类型方法",num.get(),str.get(),bool.get())

num.set(1234)
str.set("zyxwvu")
bool.set(false)
console.log("返回observable设置后",num,str,bool)
console.log("返回正常类型方法",num.get(),str.get(),bool.get())
