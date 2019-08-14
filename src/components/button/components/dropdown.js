import React, { Fragment } from "react";
import "../index.scss";

const Dropdown = ({ onClick, text }) => {
    return (
        <Fragment>
            <button
                className="button button--default dropdown"
                onClick={onClick}
                style={{ width: "auto", height: 50 }}
            >
                <div className="content-text">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </Fragment>
    );
};

export default Dropdown;
