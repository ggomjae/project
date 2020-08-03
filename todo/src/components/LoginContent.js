import React, {Component} from 'react'
import Axios from 'axios'
import Store from '../store'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginContent extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        
            id: '',
            password: '',
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this) 
        this.handleValueChange = this.handleValueChange.bind(this)
        this.loginUser = this.loginUser.bind(this)
    }

    loginUser(){
        const url = '/api/auth/users';  
        const data = {
            'id' : this.state.id,
            'password' : this.state.password
        }

        const config = {
            headers: {
              'content-type': 'application/json'
            }
        }    
        
        Axios.post(url, data, config)
            .then((accessToken) => {
                
                if(accessToken.data){
                    alert("Login Success")
                    localStorage.setItem("accessToken",accessToken.data);
                    Store.dispatch({type:'ADDTOKEN',  token : accessToken});
                }else{
                    alert("Login fail")
                }
                    
            }).catch(e=>{
                console.log(e)
            })
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.loginUser()
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }   

    render(){

        const { classes } = this.props;

        return (
            // <div>
            //     <form onSubmit={this.handleFormSubmit}>
            //         <h1>Login Content</h1>
            //             ID: <input type="text" name="id" value={this.state.id} onChange={this.handleValueChange} /><br/>
            //             PassWord: <input type="password" name="password" value={this.state.password} onChange={this.handleValueChange}/><br/>
            //         <button type="submit">Login</button>
            //     </form>
            // </div>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginContent);