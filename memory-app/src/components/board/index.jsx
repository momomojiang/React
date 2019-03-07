import React from "react";
import PropTypes from 'prop-types';
import Card from '../card';
import "./styles.css";


export default function Board({ cards, flipped,solved, dimension,disabled, handleClick }) {
    return (
        <div className='board'>
            {cards.map((card) => (
                <Card 
                    key={card.id}
                    id={card.id}
                    type={card.type}
                    width={dimension/2.5}
                    height={dimension/2.5}
                    // back={card.back}
                    // front={card.front}
                    flipped={flipped.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                    solved={solved.includes(card.id)}
                />
            ))}
        </div>
    )


    Board.PropTypes = {
        dimension: PropTypes.number.isRequired,
        disabled: PropTypes.bool.isRequired,
        cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
        solved:PropTypes.arrayOf(PropTypes.number).isRequired,
        handleClick: PropTypes.func.isRequired,
    }
}