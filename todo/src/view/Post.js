import React, {Component} from 'react'
import UpdatePost from '../components/UpdatePost'
import Reply from '../components/Reply'
import PostContent from '../components/PostContent'
import Store from '../store'

class Post extends Component{

    constructor(props) {
        
        super(props);
        this.state = {  
            postId : props.match.params.postId
        };
        Store.subscribe(function(){
            console.log("dddd")
        }.bind(this))
      }

    render(){

        const {postId} = this.state;
    
        return (
            <div>
                <PostContent id = {postId}></PostContent>
                <UpdatePost id = {postId}></UpdatePost>
                <Reply></Reply>
            </div>
        );
    } 
}

export default Post;