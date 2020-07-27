import React, {Component} from 'react'
import First from '../components/first'

class init extends Component{
    render(){
        return (
            <div>
                {this.props.title}
                <First></First>
            </div>
        );
    } 
}

export default init;