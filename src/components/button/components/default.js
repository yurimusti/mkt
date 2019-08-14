import React, { Fragment } from "react";
import "../index.scss";

const Default = ({ onClick, text, styleButton, styleText }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--default"
                onClick={onClick}
                style={styleButton}
            >
                <div className="content-text">
                    <div style={{ flex: 1 } || styleText}>{text}</div>
                </div>
            </button>
        </Fragment>
    );
};

export default Default;
