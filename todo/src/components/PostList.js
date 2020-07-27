import React, {Component} from 'react'

class PostList extends Component{

    constructor(props) {
        super(props);
        this.state = {
                username:null,
                subject : {title:'web',sub:'gomjae'}
        };
    }

    componentDidMount(){
        fetch('api')
            .then(res=>res.json())
            .then(data=>this.setState({username:data.name}));
    }

    render(){

        const {username} = this.state;

        return (
            <div>
                {username ? `Hello ${username}` : 'Hello World'}
                PostList
            </div>
        );
    }
}

export default PostList;