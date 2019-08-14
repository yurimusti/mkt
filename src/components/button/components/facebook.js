import React, { Fragment } from "react";

import "../index.scss";
const Facebook = ({ onClick, text }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--icon facebook"
                onClick={onClick}
            >
                <div className="content-text">
                    <i class="fab fa-facebook-f" />
                    <div
                        style={{
                            paddingLeft: 15,
                            textTransform: "capitalize"
                        }}
                    >
                        {text}
                    </div>
                </div>
            </button>
        </Fragment>
    );
};

export default Facebook;
