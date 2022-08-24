import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import classes from './Login.module.css';

const Login = () => {
    return (
        <a href='localhost:3000' className={classes.login}>
            <Unicons.UilUser className={classes.icon}/>
        </a>
    )
}

export default Login
