import React from 'react';
import Card from './Card/Card';
import classes from './CardList.module.css';

const CardList = ({ img }) => {
    return (
        <div className={classes.CardList} >
            {
                img.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={img[i].id} 
                            hut={img[i].hut} 
                        />
                    )
                }) 
            }
        </div>
    )
}

export default CardList
