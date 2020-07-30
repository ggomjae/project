import React, {Component} from 'react'
import Title from '../components/Title'
import JoinContent from '../components/JoinContent'

class Join extends Component{

    render(){
        
        return (
            <div>
                {this.props.title}
                <Title></Title>
                <JoinContent></JoinContent>
            </div>
        );
    } 
}

export default Join;