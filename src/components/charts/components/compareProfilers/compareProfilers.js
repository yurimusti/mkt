import React from "react";
import "./index.scss";

import Negative from "./negative";
import Positive from "./positive";

function CompareProfilers({ negative, positive }) {
    return (
        <div className="compareProfilers">
            <div className="negative">
                <span>NEGATIVOS</span>
            </div>
            <div className="positive">
                <span>POSITIVOS</span>
            </div>
            <div className="executor">
                <Negative type="executor" data={negative.executor} />
                <Positive type="executor" data={positive.executor} />
            </div>
            <div className="communicator">
                <Negative type="communicator" data={negative.comunicador} />
                <Positive type="communicator" data={positive.comunicador} />
            </div>
            <div className="analyst">
                <Negative type="analyst" data={negative.analista} />
                <Positive type="analyst" data={positive.analista} />
            </div>
            <div className="planner">
                <Negative type="planner" data={negative.planejador} />
                <Positive type="planner" data={positive.planejador} />
            </div>
            <div className="points">
                <span>PONTOS DE ATENÇÃO</span>
            </div>
            <div className="highlight">
                <span>DESTAQUES</span>
            </div>
        </div>
    );
}

export default CompareProfilers;
