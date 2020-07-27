import React, {Component} from 'react'
import RemovePost from '../components/RemovePost'
import UpdatePost from '../components/UpdatePost'
import Reply from '../components/Reply'

class Post extends Component{
    render(){
        return (
            <div>
                <RemovePost></RemovePost>
                <UpdatePost></UpdatePost>
                <Reply></Reply>
            </div>
        );
    } 
}

export default Post;