import React from "react";
import PropTypes from 'prop-types';
import "./styles.css";

export default function Card({
    handleClick,
    id,
    type,
    flipped,
    height,
    width,
    disabled,
    solved
}) {
    return(
        <div
        className={`flip-container ${flipped ? 'flipped' : ''}`}
        style={{ width, height,margin:"0 auto",display:"inline-block", border:"1px solid white"}}
        onClick={() => disabled? null:handleClick(id)}
    >
        <div className="flipper">
            <img
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? `/img/${type}.png` : '/img/back.png'}
                style={{ height, width }}>
            </img>
        </div>

    </div>
    )

    Card.PropTypes = {
        handleClick: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        flipped: PropTypes.bool.isRequired,
        solved: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        disabled:PropTypes.bool.isRequired

    }
    

}