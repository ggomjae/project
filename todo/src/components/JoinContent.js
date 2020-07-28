import React, {Component} from 'react'

class JoinContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
        
            id: '',
            password: '',
            email: '',
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