import React, { Component } from 'react';
import CardList from './CardList/CardList';
import img from './img/img';
import Search from './Search';
import classes from './ShopByBrands.module.css';

class ShopByBrands extends Component {
    constructor() {
        super()
        this.state = {
            img: img,
            search: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ search : event.target.value })
    }


    render() {
        const filter = this.state.img.filter(imgs => {
            return imgs.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
        })
        return (
            <div className={classes.main}>
                <div className={classes.container}>
                    <div className={classes.top}>
                        <h2 className={classes.name}>Shop by Brands</h2>
                        <Search searchChange={this.onSearchChange}/>
                    </div>
                        <CardList img={ filter } />
                </div>
            </div>
        )
    }
}

export default ShopByBrands
