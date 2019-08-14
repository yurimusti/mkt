import React from "react";
import "./index.scss";

const Behavior = ({ children, onClick, name }) => {
    const _selected = event => {
        event.currentTarget.classList.toggle("selected");
        onClick(event, name);
    };

    return (
        <div className="profiler-behavior">
            <div
                onClick={event => {
                    _selected(event);
                }}
                id={children}
                className="noSelection"
            >
                <input type="radio" name="option" id="option" />
                <label>{children}</label>
            </div>
        </div>
    );
};

export default Behavior;
