import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import classes from './Notification.module.css';

const Notification = () => {
    return (
        <a href='localhost:3000' className={classes.notification}>
            <Unicons.UilBell className={classes.icon}/>
        </a>
    )
}

export default Notification
