import React from "react";
import "../index.scss";

const LoginTeste = ({ onClick, text }) => {
    return (
        <div className="contentTest" onClick={onClick}>
            <button>
                <div className="button--big test">
                    <div style={{ flex: 1 }}>{text}</div>
                </div>
            </button>
        </div>
    );
};

export default LoginTeste;
