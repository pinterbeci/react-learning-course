import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {

    {/* const onClick = (e) => {
        console.log('click');
        console.log(e);
        }
    */}
    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color }} className="btn">{props.text}</button>
    )
}

Button.defaultProps = {

    color: "black",
    text: "Hello", 

}


Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick : PropTypes.func,
}

export default Button
