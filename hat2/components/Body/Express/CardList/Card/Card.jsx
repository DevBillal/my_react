import React from 'react'
import classes from './Card.module.css'

const Card = ({ hut  }) => {
    return (
            <div className='tc dib br3 ma2 grow bw2 shadow-4'>
                <img className={classes.img} alt='j' src={hut} />
                {/* <img alt='hut' src={`https://picsum.photos/${id}`} /> */}
            </div>
    )
}

export default Card
