import * as Unicons from '@iconscout/react-unicons';
import React from 'react';
import classes from './Cart.module.css';

const Cart = () => {
    return (
        <a href='localhost:3000' className={classes.cart}>
            <Unicons.UilShoppingBag className={classes.icon}/>
        </a>
    )
}

export default Cart
