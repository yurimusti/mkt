import React, { Fragment } from "react";
import "../index.scss";

const Warning = ({ onClick, text }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--warning"
                onClick={onClick}
            >
                <div className="content-text">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </Fragment>
    );
};

export default Warning;
