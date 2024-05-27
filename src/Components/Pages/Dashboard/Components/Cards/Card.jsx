import React from "react";
import PropTypes from 'prop-types'

/**
 * @param {"information" | "alert"}
 */

const Card = ({type, title, value, caption}) => {
    return (
        
    <div className={`card-component ${type}-card`}>
        <p className="text-[#b2b2b2]">
            {title}
        </p>
        <p className="font-Dana-ExtraBold  mt-2 text-3xl">{value}</p>
        <p className="text-[#b2b2b2]">
                {caption}
        </p>
    </div>
    )
}


Card.proptypes = {
    type: PropTypes.oneOf(["information" | "alert"]).isRequired,
    
}


export default Card