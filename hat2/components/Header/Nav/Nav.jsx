import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import CartChatNL from './CartChatNL/CartChatNL'
import Logo from './Logo/Logo'
import classes from './Nav.module.css'
import SearchBar from './SearchBar/SearchBar'



const Nav = () => {
    return (
            <div>
                <div className={classes.container}>
                    <div className={classes.logo}>
                        <Logo/>
                    </div>
                    <div className={classes.searchbar}>
                        <SearchBar/>
                    </div>
                    <div className={classes.cart}>
                        <CartChatNL/>
                    </div>
                </div>
            </div>

            
            // <Container className={classes.container}>
            //     <Row>
            //         <Col xs={1} className={classes.logo}>
            //             <Logo/>
            //         </Col>
            //         <Col xs={8} className={classes.searchbar}>
            //             <SearchBar/>
            //         </Col>
            //         <Col xs={2} className={classes.cart}>
            //             <CartChatNL/>
            //         </Col>
            //     </Row>
            // </Container>

            
    )
}

export default Nav
