import React, { useEffect, useState } from "react";
import "./index.scss";

const MediumRequirement = ({
    voce = {
        executor: "25%",
        planejador: "25%",
        comunicador: "25%",
        analista: "25%"
    },
    meio = {
        executor: "25%",
        planejador: "25%",
        comunicador: "25%",
        analista: "25%"
    },
    flexibilidade = {
        executor: "25%",
        planejador: "25%",
        comunicador: "25%",
        analista: "25%"
    }
}) => {
    // const [voce.executor, setVoceExecutor] = useState(voce.executor);
    // const [voce.planejador, setVocePlanejador] = useState(voce.planejador);
    // const [voce.analista, setVoceAnalista] = useState(voce.analista);
    // const [voce.comunicador, setVoceComunicador] = useState(voce.comunicador);

    // const [meio.executor, setMeioExecutor] = useState(meio.executor);
    // const [meio.planejador, setMeioPlanejador] = useState(meio.planejador);
    // const [meio.analista, setMeioAnalista] = useState(meio.analista);
    // const [meio.comunicador, setMeioComunicador] = useState(meio.comunicador);

    // const [flexibilidade.executor, setFlexibilidadeExecutor] = useState(
    //     flexibilidade.executor
    // );
    // const [flexibilidade.planejador, setFlexibilidadePlanejador] = useState(
    //     flexibilidade.planejador
    // );
    // const [flexibilidade.analista, setFlexibilidadeAnalista] = useState(
    //     flexibilidade.analista
    // );
    // const [flexibilidade.comunicador, setFlexibilidadeComunicador] = useState(
    //     flexibilidade.comunicador
    // );

    // useEffect(() => {
    //     voce.executor > 2
    //         ? setVoceExecutor(23.4)
    //         : setVoceExecutor(voce.executor);
    //     voce.planejador > 2
    //         ? setVocePlanejador(23.4)
    //         : setVocePlanejador(voce.executor);
    //     voce.analista > 2
    //         ? setVoceAnalista(23.4)
    //         : setVoceAnalista(voce.executor);
    //     voce.comunicador > 2
    //         ? setVoceComunicador(23.4)
    //         : setVoceComunicador(voce.executor);

    //     meio.executor > 2
    //         ? setMeioExecutor(23.4)
    //         : setMeioExecutor(meio.executor);
    //     meio.planejador > 2
    //         ? setMeioPlanejador(23.4)
    //         : setMeioPlanejador(meio.planejador);
    //     meio.analista > 2
    //         ? setMeioAnalista(23.4)
    //         : setMeioAnalista(meio.analista);
    //     meio.comunicador > 2
    //         ? setMeioComunicador(23.4)
    //         : setMeioComunicador(meio.comunicador);

    //     flexibilidade.executor > 2
    //         ? setFlexibilidadeExecutor(23.4)
    //         : setFlexibilidadeExecutor(flexibilidade.executor);
    //     flexibilidade.planejador > 2
    //         ? setFlexibilidadePlanejador(23.4)
    //         : setFlexibilidadePlanejador(flexibilidade.planejador);
    //     flexibilidade.analista > 2
    //         ? setFlexibilidadeAnalista(23.4)
    //         : setFlexibilidadeAnalista(flexibilidade.analista);
    //     flexibilidade.comunicador > 2
    //         ? setFlexibilidadeComunicador(23.4)
    //         : setFlexibilidadeComunicador(flexibilidade.comunicador);
    // }, []);

    return (
        <div className="containerMediumChart">
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <div style={{ flex: 2, alignSelf: "center" }}>
                    <span style={{ color: "#5F4A87" }}>Você</span>
                </div>
                <div style={{ flex: 9 }}>
                    <div
                        className="chart"
                        style={{
                            gridTemplateColumns: `${voce.executor} ${voce.planejador} ${voce.comunicador} ${voce.analista}`
                        }}
                    >
                        <div className="item executor first"></div>
                        <div className="item planejador"></div>
                        <div className="item comunicador"></div>
                        <div className="item analista last"></div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    marginTop: 20,
                    marginBottom: 20
                }}
            >
                <div style={{ flex: 2, alignSelf: "center" }}>
                    <span style={{ color: "#5F4A87" }}>Meio</span>
                </div>
                <div style={{ flex: 9 }}>
                    <div
                        className="chart"
                        style={{
                            gridTemplateColumns: `${meio.executor} ${meio.planejador} ${meio.comunicador} ${meio.analista}`
                        }}
                    >
                        <div className="item executor first"></div>
                        <div className="item planejador"></div>
                        <div className="item comunicador"></div>
                        <div className="item analista last"></div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <div style={{ flex: 2, alignSelf: "center" }}>
                    <span style={{ color: "#5F4A87" }}>Flexibilidade</span>
                </div>
                <div style={{ flex: 9 }}>
                    <div
                        className="chart"
                        style={{
                            gridTemplateColumns: `${flexibilidade.executor} ${flexibilidade.planejador} ${flexibilidade.comunicador} ${flexibilidade.analista}`
                        }}
                    >
                        <div className="item executor first"></div>
                        <div className="item planejador"></div>
                        <div className="item comunicador"></div>
                        <div className="item analista last"></div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flex: 1
                }}
            >
                <div style={{ flex: 2, alignSelf: "center" }}>{`${" "}`}</div>
                <div style={{ flex: 9 }}>
                    <div className="contentInfo">
                        <div className="info">
                            <span className="dominante">{`${" "}`}</span>
                            <span className="executor">Executor</span>
                        </div>
                        <div className="info">
                            <span className="dominante">{`${" "}`}</span>
                            <span className="planejador">Planejador</span>
                        </div>
                        <div className="info">
                            <span className="dominante">{`${" "}`}</span>
                            <span className="comunicador">Comunicador</span>
                        </div>
                        <div className="info last">
                            <span className="dominante">{`${" "}`}</span>
                            <span className="analista">Analista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediumRequirement;
