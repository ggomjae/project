import React, {Component} from 'react'
import Axios from 'axios'
import history from '../history';
import Store from '../store'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core';

const styles = theme => ({
    root : {
        witdh : '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX : "auto"
    },
    table: {
        minWidth : 1080
    }
})

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
        const { classes } = this.props;

        return (
            <Paper className = {classes.root}>
                <h1>Post List</h1>
                        <Table className = {classes.table}>
                            <TableHead>
                                <TableCell>Bno</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Writer</TableCell>
                                <TableCell>Regdate</TableCell>
                                <TableCell>REMOVE</TableCell>
                                <TableCell>MOVE</TableCell>
                            </TableHead>
                            <TableBody>
                                {posts.map(v => ( 
                                    <TableRow key={v.bno}>
                                        <TableCell>{v.bno}</TableCell>
                                        <TableCell>{v.title}</TableCell>
                                        <TableCell>{v.writer}</TableCell>
                                        <TableCell>{v.regdate}</TableCell>
                                        <TableCell><button onClick={()=> this.removeFunction(v.bno)}>{"remove"}</button></TableCell>
                                        <TableCell><button onClick={()=> this.movePath(v.bno)}>{"move"}</button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(PostList);