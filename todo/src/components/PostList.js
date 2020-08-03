import React, {Component} from 'react'
import Axios from 'axios'
import history from '../history';
import Store from '../store'

class PostList extends Component{
    
    

    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            isState: false
        };
        Store.subscribe(function(){
            this.callApi()
                .then(res => this.setState({posts: res,isState: Store.getState().listState}))
                .catch(err => console.log(err))
        }.bind(this))

        this.callApi= this.callApi.bind(this)
    }

    componentDidMount(){
        this.callApi()
            .then(res => this.setState({posts: res}))
            .catch(err => console.log(err))
    }

    callApi = async () => {
       
        const response = await fetch('/api/posts')
        const body = await response.json()
        console.log(body)
        return body
    }

    removeFunction(param) {
       
        const url = '/api/posts/' + param;  
        const data = {
            'bno' : param
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }

        Axios.delete(url, data, config)
            .then(
                alert('success'),
                Store.dispatch({type:'ADDPOST'})
            ).catch(e=>{
                console.log(e)
            })
    }

    movePath(param){
        alert(param)
        history.push('/post/'+param)
        Store.dispatch({type:'MOVEPATH'})
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