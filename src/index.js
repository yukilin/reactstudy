import React from 'react'; //创建组件，虚拟dom元素，生命周期
import ReactDOM from 'react-dom';//把创建好的组件和虚拟dom放到页面中展示
import Hello from './components/Hello' //默认如果不做单独配置的话不能省略.jsx后缀名
import CommentList from './components/CommentList'

//创建虚拟dom元素
// const myH1 = React.createElement('h1', {id:"h1", title:"test title"},'This is H1');
// const myDiv = React.createElement('div', null, 'This is div', myH1);

//渲染页面上的DOM结构，最好的方式，就是写html代码
//使用babel来转换js中的标签
//js中混合写入html的语法，JSX，符合xml规范的js
// const arrStr=[
//     {id:1, user:'penny'},
//     {id:2, user:'xiaolong'},
//     {id:3, user:'wancheng'}
// ]
// const nameArr = []
// arrStr.forEach(item => {
//     const temp = <h5 key={item.id}>{item.user}</h5>
//     nameArr.push(temp)
// })

// const result = arrStr.map(item => {
//     return item.user+"!"
// })
// ReactDOM.render(arrStr.map(item=><h4 key={item.id}>{item.user}</h4>),document.getElementById('app'));



// ReactDOM.render(<Hello name={user.name} age={user.age}/>,document.getElementById('app'));
// ReactDOM.render(<Hello/>,document.getElementById('app'));

//ES6中class关键字，是实现面向对象编程的新形式
//通过new出来的实力，访问到的属性，叫做实例属性
//静态属性：通过构造函数直接访问到的属性，叫做静态属性

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.say=function(){
//     console.log('this is person instance method')
// }

// //静态方法
// Person.show=function(){
//     console.log('Person showing...')
// }

// const p1 = new Person('penny',30)
// Person.info="aaa";
// console.log(p1)
// p1.say();
// Person.show();
// console.log(Person.info)

// //创建一个animal类
// class Animal{
//     //这是类中的构造器，每一个类中都有一个构造器，如果程序员没有手动指定构造器，可以认为类内部有个隐形的看不见的空的构造器
//     // constructor(){
//     // }
//     //构造器的作用就是每当new这个类的时候必然会优先执行构造器的代码
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     //在class内部，通过static修饰的属性，就是静态属性
//     static info = "eee"
//     //这个动物的实例方法, 挂载到原型对象上面的方法
//     sayHello(){
//         console.log('this is method from animal');
//     }

//     //static方法
//     static show(){
//         console.log('this is static method from animal');
//     }
// }

// const a1 = new Animal('Bobo', 30);
// console.log(a1);
// console.log(Animal.info);
// Animal.show();
// a1.sayHello();


//在class类中 可以使用extends关键字实现子类继承父类
//语法class子类extends父类
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age =  age;
//     }
//     sayHello(){
//         console.log('hello everyone');
//     }
// }

// class American extends Person {
//     constructor(name, age){
//         //问题1为什么一定要在constructor中调用super,
//         //问题2 super是个什么东西， 它是父类的构造器，其实就是父类中constructor的一个引用
//         //问题3 为什么我们只是调用了super，但是a1实例的name, age都变成undefined
//         super(name, age);
//     }
// }
// const a1 = new American('jack',20)
// console.log(a1);
// a1.sayHello();

// class Chinese extends Person {
//     constructor(name, age, identity){
//         super(name,age);
//         this.identity = identity;
//     }
// }
// const c1 = new Chinese('zhangsan',22, '10001')
// c1.sayHello();
// console.log(c1);


//class关键字创建组件
//使用class的组件，有自己的私有数据和生命周期函数
//使用function创建的，没有私有数据只有props，也没有生命周期函数
// class Movie extends React.Component{
//     //在class关键字创建的组件中，如果想使用外界传过来的props参数，不用接受，直接使用, this代表这个类的实例对象
//     constructor(){
//         super()
//         //只有调用了super以后，才能使用this关键字
//         //this.state里面的数据都是可读可写的, 通过this.state绑定私有数据(this.state)
//         this.state = {
//             msg:'hello, message from class'
//         }
//     }
//     render(){
//         this.state.msg = 'hello, changed message'
//         return <h1>this is Movie h1 -- {this.props.name} -- {this.props.age} -- {this.props.id} -- {this.state.msg}</h1>
//     }
// }

// const user={
//     id:1,
//     name:'penny',
//     age:30
// }
// ReactDOM.render(<Movie {...user}/>,document.getElementById('app'));




ReactDOM.render(<div><CommentList /></div>, document.getElementById('app'));
