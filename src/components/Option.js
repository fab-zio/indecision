import React from 'react';


const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.counter}. {props.optionText}</p>
            {/* <ol>
                <li>{props.counter}. {props.optionText}</li>
            </ol> */}
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
      </button>
        </div>
    );
};

export default Option