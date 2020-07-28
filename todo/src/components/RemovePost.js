import React, {Component} from 'react'
import Axios from 'axios'

class RemovePost extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            bno : ''
        }
        
        this.handleFormSubmit = this.handleFormSubmit.bind(this)    
        this.handleValueChange = this.handleValueChange.bind(this)
        this.removePost = this.removePost.bind(this)
    }
    removePost(){

        const url = '/api/remove';  

        const data = {
            'bno' : this.state.bno
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }

        return Axios.post(url, data, config)
            .then(
                alert('success')
            ).catch(e=>{
                console.log(e)
            })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.removePost()
            .then((response) => {    
                console.log(response.data);
        }).catch( e => {
            console.log(e)
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
                <h1>Remove Post</h1>
                Bno: <input type="number" name="bno" value={this.state.bno} onChange={this.handleValueChange} /><br/>

                <button type="submit">remove</button>
             </form>
        );
    }
}

export default RemovePost;