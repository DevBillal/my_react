import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import './Navigation.module.css';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.navs}>
                    <div className={classes.dropdown}>
                        <span className={classes.categories}>
                            <span>
                                <Unicons.UilBars className={classes.bars}/>
                            </span>
                            <span>
                                CATEGORIES
                            </span>
                            <span>
                                <Unicons.UilAngleDown className={classes.bars}/>
                            </span>
                        </span>
                    </div>
                    <div className={classes.nav1}>
                        <a className={classes.navLink} href='localhost:3000'>All Shops</a>
                        <a className={classes.navLink} href='localhost:3000'>Gift Card</a>
                        <a className={classes.navLink} href='localhost:3000'>Campaigns</a>
                        <a className={classes.navLink} href='localhost:3000'>Top-up</a>
                        <a className={classes.navLink} href='localhost:3000'>Express</a>
                        <a className={classes.navLink} href='localhost:3000'>T10</a>
                    </div>
                    <div className={classes.nav2}>
                        <a className={classes.navLink} href='localhost:3000'>News Feed</a>
                        <a className={classes.navLink} href='localhost:3000'>Merchant Zone</a>
                        <a className={classes.navLink} href='localhost:3000'>Help</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
