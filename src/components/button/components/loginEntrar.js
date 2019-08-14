import React from "react";
import "../index.scss";

const LoginEntrar = ({ onClick, text }) => {
    return (
        <div className="contentTest" onClick={onClick}>
            <button>
                <div className="button--big login">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </div>
    );
};

export default LoginEntrar;
