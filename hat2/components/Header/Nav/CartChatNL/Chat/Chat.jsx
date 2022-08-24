import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import classes from './Chat.module.css';

const Chat = () => {
    return (
        <a href='localhost:3000' className={classes.chat}>
            <Unicons.UilCommentAlt className={classes.icon}/>
        </a>
    )
}

export default Chat
