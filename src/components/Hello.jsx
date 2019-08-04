import React from 'react';

//第一种创建组件的方式
function Hello(props){
    //在组件中，必须返回一个合法的jsx虚拟dom元素
    console.log(props);
    return <div>This is Hello Component.</div>
}

//把组件暴露出去
export default Hello