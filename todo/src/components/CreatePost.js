import React, {Component} from 'react'
import Axios from 'axios'

class CreatePost extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            title: '',
            content: '',
            writer: '',
        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)    
        this.handleValueChange = this.handleValueChange.bind(this)
        this.createPost = this.createPost.bind(this)
    }

    createPost(){

        const url = '/api/create';  

        const data = {
            'title' : this.state.title,
            'content' : this.state.content,
            'writer' : this.state.writer
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }    
        Axios.post(url, data, config)
            .then(
                alert('success')
            
            )
            .catch(e=>{
                console.log(e)
            })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.createPost()
            .then((response) => {    
                console.log(response.data);
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }   

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Create Post</h1>
                Title: <input type="text" name="title" value={this.state.title} onChange={this.handleValueChange} /><br/>
                Content: <input type="text" name="content" value={this.state.content} onChange={this.handleValueChange} /><br/>
                Writer: <input type="text" name="writer" value={this.state.writer} onChange={this.handleValueChange} /><br/>

                <button type="submit">add</button>
            </form>
        );
    }
}

export default CreatePost;