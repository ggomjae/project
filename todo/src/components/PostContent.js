import React, {Component} from 'react'

class PostContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            post:{}
        };
    }

    componentDidMount = async () => {
        await this.callApi()
            .then(res => this.setState({post: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/posts/'+this.props.id)
        const body = await response.json()
        return body[0]
    }

    render(){
        return (
            <div>
                {this.state.post.bno} {this.state.post.title} {this.state.post.content}
            </div>
        );
    }
}

export default PostContent;