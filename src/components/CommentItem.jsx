import React from 'react'
//第三层封装
import styles from '@/components/styles'
import cssobj from '@/css/commentitem.css'
console.log(cssobj);
//第一层封装
// const itemStyle = {border:'1px solid #ccc', margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'};
// const userStyle = {fontSize:'14px'};
// const contentStyle = {fontSize:'12px'};

//第二层封装
// const styles = {
//     item: {border:'1px solid #ccc', margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'},
//     user:  {fontSize:'14px'},
//     content: {fontSize:'12px'}
// }

//使用function定义普通组件
function CommentItem(props) {
    return <div className={cssobj.commentBox}>
        <h1 className={cssobj.title}>{props.user}</h1>
        <p className={cssobj.content}>{props.content}</p>
    </div>
}

export default CommentItem