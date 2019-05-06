import React from 'react';


const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.counter}. {props.optionText}</p>
            <button
                className="button button--link"
                onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
      </button>
        </div>
    );
};

export default Option