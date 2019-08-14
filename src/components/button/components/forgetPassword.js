import React from "react";
import "../index.scss";

const ForgetPassword = ({ onClick, text }) => {
    return (
        <div className="contentForgetPassword" onClick={onClick}>
            <button>
                <div className="content-text">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </div>
    );
};

export default ForgetPassword;
