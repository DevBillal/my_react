import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './Body.module.css';
import COD from './COD/COD';
import DropDown from './DropDown/DropDown';
import Express from './Express/Express';
import MainSlider from './MainSlider/MainSlider';
import ShopByBrands from './ShopByBrands/ShopByBrands';
import SubSlider from './SubSlider/SubSlider';

const Body = () => {
    return (
        <div className={classes.container}>

            {/* Slider and Dropdown  */}
            <Container>
                <Row>
                    <Col xs={3}>
                        <DropDown />
                    </Col>
                    <Col className={classes.margin} xs={9}>
                        <MainSlider />
                        <SubSlider />
                    </Col>
                </Row>
            </Container>

            {/* Express & Cash on Delivery section */}
            <Express />
            <COD />

            {/* Shop By Brands  */}
            <ShopByBrands />
        </div>
    )
}

export default Body
