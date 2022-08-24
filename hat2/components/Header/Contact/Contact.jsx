import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.tel}>
                    <Unicons.UilCalling className={classes.Unicons}/>
                    <a href='tel:333'>088 345 789</a>
                </div>
                <div className={classes.email}>
                    <Unicons.UilEnvelope className={classes.Unicons}/>
                    <a href='mailto:billal.bd.8826@gmail.com'>billal.bd.8826@gmail.com</a>
                </div>
                <div className={classes.happy}>
                    <Unicons.UilSmile className={classes.Unicons}/>
                    <span>Happy Shopping</span>
                </div>            
            </div>
        </div>
    )
}

export default Contact
