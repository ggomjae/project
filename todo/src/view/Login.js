import React, {Component} from 'react'
import Title from '../components/Title'
import LoginContent from '../components/LoginContent'

class Login extends Component{

    render(){
        
        return (
            <div>
                <Title></Title>
                <LoginContent></LoginContent>
            </div>
        );
    } 
}

export default Login;