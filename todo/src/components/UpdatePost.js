import React, {Component} from 'react'
import Axios from 'axios'

class UpdatePost extends Component{

    constructor(props) {
        super(props);
        this.state = {
            postId : this.props.id,
            content: '',
        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)    
        this.handleValueChange = this.handleValueChange.bind(this)
        this.createPost = this.updatePost.bind(this)
    }

    updatePost(){
        
        const url =  '/api/update'
       
        const data = {
            'postid' : this.state.postId,
            'content' : this.state.content
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }    
        Axios.post(url, data, config)
            .then(
                alert('success'),
                window.location.reload()           
            ).catch(e=>{
                console.log(e)
        })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.updatePost()
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }   

    render(){
        return (
            <div>
                <h1>UpdatePost</h1>
                <form onSubmit={this.handleFormSubmit}>
                        Content: <input type="text" name="content" value={this.state.content} onChange={this.handleValueChange} /><br/>
                    <button type="submit">update</button>
                </form>
            </div>
        );
    }
}

export default UpdatePost;