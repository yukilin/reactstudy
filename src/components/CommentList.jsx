import React from 'react'
import CommentItem from './CommentItem'
import cssobj from '@/css/commentlist.css'
console.log(cssobj);

//使用class定义组件
class CommentList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, content: 'comment 1', user: 'penny' },
                { id: 2, content: 'comment 2', user: 'penny2' },
                { id: 3, content: 'comment 3', user: 'penny3' },
            ]
        }
    }
    render() {
        return <div>
            {/* <ul>{this.state.CommentList.map(item => <li key={item.id}>{item.user}</li>)}</ul> */}

            {/* 在jsx中，想写行内样式 */}
            <h1 className={[cssobj.title,'test'].join(' ') }>This is comment List</h1>
            {this.state.CommentList.map(item =>
            <CommentItem {...item}  key={item.id}/>)}
        </div>

    }
}

export default CommentList