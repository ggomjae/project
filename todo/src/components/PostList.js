import React, {Component} from 'react'
import Axios from 'axios'

class PostList extends Component{

    constructor(props) {
        super(props);
        this.state = {
                posts:[]
        };
    }
    componentDidMount(){
        this.callApi()
            .then(res => this.setState({posts: res}))
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('/api/list')
        const body = await response.json()
        console.log(body)
        return body
    }

    removeFunction(param) {
        alert(param);
        const url = '/api/remove';  
        const data = {
            'bno' : param
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }

        Axios.post(url, data, config)
            .then(
                alert('success')
            ).catch(e=>{
                console.log(e)
            })
    }

    movePath(param){
        alert(param)
        
    }

    render(){

        const {posts} = this.state;
        
        return (
            <div>
                <h1>Post List</h1>
                    <div>
                        {posts.map(v => ( 
                                <p key={v.bno}>{v.bno} {v.title} {v.writer} {v.regdate} 
                                    <button onClick={()=> this.removeFunction(v.bno)}>{"remove"}</button>
                                    <button onClick={()=> this.movePath(v.bno)}>{"move"}</button>
                                </p>
                        ))}
                    </div>
            </div>
        );
    }
}

export default PostList;