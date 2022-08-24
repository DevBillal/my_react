import React from 'react'
import Cart from './Cart/Cart'
import classes from './CartChatNL.module.css'
import Chat from './Chat/Chat'
import Login from './Login/Login'
import Notification from './Notification/Notification'

const CartChatNL = () => {
    return (
        <div className={classes.flex}>
            <Cart />
            <Notification />
            <Chat />
            <Login />
        </div>
    )
}

export default CartChatNL
