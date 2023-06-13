import React, {useEffect, useState} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import memories from '../../images/memories.jpeg'
import useStyles from './styles'
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useLocation,useNavigate} from 'react-router-dom'

const Appbar = () =>{
    
    const classes = useStyles();
    //const user = null;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    {/* Here user is store in local storage which we can use below later on so remove above when it works */}
    
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user)
    
    
    const logout = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/')
        setUser(null)
    }

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className= {classes.heading} varient = "h1" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </div>

            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ): 
                    (
                    
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>   
                    
                    )
                    
                }
            </Toolbar>
        </AppBar>
    )
}

export default Appbar;