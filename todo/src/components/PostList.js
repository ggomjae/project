import React, {Component} from 'react'

class PostList extends Component{

    constructor(props) {
        super(props);
        this.state = {
                post:[]
        };
    }
    componentDidMount(){
        this.callApi()
            .then(res => this.setState({post: res}))
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('/api/list')
        const body = await response.json()
        console.log(body)
        return body
    }

    render(){

        const {post} = this.state;
        
        
        return (
            <div>
                <div>
                    {post.map(v => <p>{v.bno}</p>)}
                    {post.map(v => <p>{v.title}</p>)}
                </div>
            </div>
        );
    }
}

export default PostList;