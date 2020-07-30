import React, {Component} from 'react'
import PostList from '../components/PostList'
import CreatePost from '../components/CreatePost'

class Main extends Component{

    render(){
        
        return (
            <div>
                <PostList></PostList>
                <CreatePost></CreatePost>
            </div>
        );
    } 
}

export default Main;