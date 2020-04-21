
//document.write("恭喜发财")

function Animal(){

}
function Dog(){

}
Dog.prototype=Object.create(Animal.prototype);
console.log("函数继承",new Dog() instanceof Animal)

Object.defineProperties(Animal.prototype,{
    name:{
        value(){
            return 'Animal'
        }
    },
    say:{
        value(){
            return `I'm ${this.name()}`
        }
    }
})
console.log(new Dog().say())

Dog.prototype=Object.create(Animal.prototype,{
    name:{
        value(){
            return `Dog`
        }
    }
});
console.log(new Dog().say())
console.log(Dog.prototype.constructor)


Dog.prototype=Object.create(Animal.prototype,{
    constructor:{
        value:Dog,
       enumerable:false 
    },
    name:{
        value(){
            return `Dog`
        }
    }
});
console.log(Dog.prototype.constructor)


class Person{
    name(){
            return 'Person'
    }
    say(){
            return `I'm ${this.name()}`
    }  
}
class Xiaoming extends Person{
    //food="大米";//babel-plugin-transform-class-properties
    name(){
            return 'Xiaoming'
    }
}
console.log("类继承",new Xiaoming instanceof Person)
console.log("类继承",Xiaoming.prototype.constructor)