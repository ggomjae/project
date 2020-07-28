import React, {Component} from 'react'

class LoginContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            id: '',
            password: '',
        }
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
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