import React from 'react'
import classes from './Card.module.css'

const Card = ({ hut , cod }) => {
    return (
            <div className='tc bg-white dib pa2 br3 ma2 grow bw2 shadow-4'>
                <img className={classes.img} alt='j' src={hut} />
                {/* <img alt='hut' src={`https://picsum.photos/${id}`} /> */}
                <p>{cod}</p>
            </div>
    )
}

export default Card
