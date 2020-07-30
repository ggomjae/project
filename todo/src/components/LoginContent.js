import React, {Component} from 'react'
import Axios from 'axios'
class LoginContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            id: '',
            password: '',
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this) 
        this.handleValueChange = this.handleValueChange.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    loginUser(){
        const url = '/api/loginuser';  
        const data = {
            'id' : this.state.id,
            'password' : this.state.password
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }    
        
        Axios.post(url, data, config)
            .then((accessToken) => {
                
                if(accessToken.data){
                    alert("Login Success")
                    localStorage.setItem("accessToken",accessToken.data);
                }else{
                    alert("Login fail")
                }
                    
            }).catch(e=>{
                console.log(e)
            })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.loginUser()
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }   

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>Login Content</h1>
                    ID: <input type="text" name="id" value={this.state.id} onChange={this.handleValueChange} /><br/>
                    PassWord: <input type="password" name="password" value={this.state.password} onChange={this.handleValueChange}/><br/>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LoginContent;