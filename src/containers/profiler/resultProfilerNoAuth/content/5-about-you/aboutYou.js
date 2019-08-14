import React from "react";
import "./index.scss";

const AboutYou = ({ texts, canShowAll }) => {
    return (
        <div className="about-you-noAuth">
            <h2>Sobre você</h2>
            {canShowAll === true ? (
                <div className="info-you-noAuth">
                    <div className="block-1">
                        <span>Desempenho de tarefas</span>
                        <p>{texts.desempenho_tarefas.texto}</p>
                    </div>
                    <div className="block-2">
                        <span>Fatores motivadores</span>
                        <p>{texts.fatores_motivadores.texto}</p>
                    </div>
                    <div className="block-3">
                        <span>Fatores de afastamento</span>
                        <p>{texts.fatores_afastamento.texto}</p>
                    </div>
                </div>
            ) : (
                <p className="desc-profiler">{texts.inicial.texto}</p>
            )}
        </div>
    );
};

export default AboutYou;
