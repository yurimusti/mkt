import React from "react";
import "./index.scss";

const Welcome = ({ getPassport }) => {
    return (
        <div className="profiler-welcome">
            <div className="message">
                <h3>{getPassport.name ? getPassport.name + "," : ""}</h3>
                <p className="message-welcome">
                    Profiler é um questionário preciso para identificar seu
                    perfil comportamental. Reserve 10 minutos para preenchê-lo
                    sem interrupções, com sinceridade.
                </p>
                <p className="message-sub">Não há respostas corretas.</p>
            </div>
        </div>
    );
};

export default Welcome;
