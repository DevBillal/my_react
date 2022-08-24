import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import CardList from './CardList/CardList';
import classes from './Express.module.css';
import img from './img/img';

const Express = () => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.top}>
                <h2 className={classes.name}>Hut Express</h2>
                        <div className={classes.arrow}>
                            See all
                            <Unicons.UilAngleLeft />
                            <Unicons.UilAngleRight />
                        </div>
                </div>
                <CardList img={ img } />
            </div>
        </div>
    )
}

export default Express
