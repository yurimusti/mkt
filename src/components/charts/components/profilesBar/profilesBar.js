import React from "react";
import "./index.scss";

const Profiler = ({
    executor = "30%",
    planejador = "20%",
    comunicador = "20%",
    analista = "30%"
}) => {
    const exec = executor.split("%");
    const plane = planejador.split("%");
    const comuni = comunicador.split("%");
    const anali = analista.split("%");

    return (
        <div className="containerChart">
            <div className="contentInfo">
                <div className="info">
                    <span className="dominante">{`${
                        exec[0] >= 25 ? "DOMINANTE" : ""
                    }`}</span>
                    <span className="executor">Executor</span>
                </div>
                <div className="info">
                    <span className="dominante">{`${
                        plane[0] >= 25 ? "DOMINANTE" : ""
                    }`}</span>
                    <span className="planejador">Planejador</span>
                </div>
                <div className="info">
                    <span className="dominante">{`${
                        comuni[0] >= 25 ? "DOMINANTE" : ""
                    }`}</span>
                    <span className="comunicador">Comunicador</span>
                </div>
                <div className="info last">
                    <span className="dominante">{`${
                        anali[0] >= 25 ? "DOMINANTE" : ""
                    }`}</span>
                    <span className="analista">Analista</span>
                </div>
            </div>

            <div
                className="chart"
                style={{
                    gridTemplateColumns: `${executor} ${planejador} ${comunicador} ${analista}`
                }}
            >
                <div className="item executor first">
                    <span>{executor}</span>
                </div>
                <div className="item planejador">
                    <span>{planejador}</span>
                </div>
                <div className="item comunicador">
                    <span>{comunicador}</span>
                </div>
                <div className="item analista last">
                    <span>{analista}</span>
                </div>
            </div>
        </div>
    );
};

export default Profiler;
