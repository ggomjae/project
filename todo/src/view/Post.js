import React, {Component} from 'react'
import UpdatePost from '../components/UpdatePost'
import Reply from '../components/Reply'
import PostContent from '../components/PostContent'

class Post extends Component{

    constructor(props) {
        super(props);
        this.state = {  
            postId : props.match.params.postId
        };
      }

    render(){

        const {postId} = this.state;

        return (
            <div>
                {postId}
                <PostContent></PostContent>
                <UpdatePost></UpdatePost>
                <Reply></Reply>
            </div>
        );
    } 
}

export default Post;