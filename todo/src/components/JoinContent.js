import React, {Component} from 'react'
import Axios from 'axios'
class JoinContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            id: '',
            password: '',
            email: '',
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)    
        this.handleValueChange = this.handleValueChange.bind(this)
        this.createUser = this.createUser.bind(this)
    }

    createUser(){

        const url = '/api/createuser';  
        const data = {
            'id' : this.state.id,
            'password' : this.state.password,
            'email' : this.state.email
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }    
        Axios.post(url, data, config)
            .then((token) => {
                alert(token.data)
            }).catch(e=>{
                console.log(e)
            })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.createUser()
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }   

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Join Content</h1>
                    ID: <input type="text" name="id" value={this.state.id} onChange={this.handleValueChange} /><br/>
                    Email: <input type="text" name="email" value={this.state.email} onChange={this.handleValueChange} /><br/>
                    PassWord: <input type="password" name="password" value={this.state.password} onChange={this.handleValueChange}/><br/>
                <button type="submit">Join</button>
            </form>
        );
    }
}

export default JoinContent;