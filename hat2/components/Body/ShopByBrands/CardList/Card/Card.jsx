import React from 'react'
import classes from './Card.module.css'

const Card = ({ pic , name }) => {
    return (
        <div>
            <div className='tc bg-white dib pa2 br3 ma2 grow bw2 shadow-4'>
                <img className={classes.img} alt='j' src={pic} />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Card
