import React, { Fragment } from "react";
import "../index.scss";

const ButtonGoogle = ({ onClick, text }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--icon google"
                onClick={onClick}
            >
                <div className="content-text">
                    <i class="fab fa-google" />
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

export default ButtonGoogle;
