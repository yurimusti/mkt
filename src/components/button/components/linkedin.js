import React, { Fragment } from "react";
import "../index.scss";

const Linkedin = ({ onClick, text }) => {
    return (
        <Fragment>
            <button
                className="button button--big button--icon linkedin"
                onClick={onClick}
            >
                <div className="content-text">
                    <i class="fab fa-linkedin-in" />
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

export default Linkedin;
