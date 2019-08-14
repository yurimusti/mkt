import React, { Fragment } from "react";
import "../index.scss";

const Primary = ({ onClick, text, styleButton }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--primary"
                onClick={onClick}
                style={styleButton}
            >
                <div className="content-text">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </Fragment>
    );
};

export default Primary;
