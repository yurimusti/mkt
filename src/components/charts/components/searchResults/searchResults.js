import React, { useEffect, useState } from "react";
import "./index.scss";

const SearchResults = ({
    voce = {
        dominante: "25%",
        informal: "25%",
        condescendente: "25%",
        formal: "25%"
    },
    meio = {
        dominante: "25%",
        informal: "25%",
        condescendente: "25%",
        formal: "25%"
    },
    flexibilidade = {
        dominante: "25%",
        informal: "25%",
        condescendente: "25%",
        formal: "25%"
    }
}) => {
    const [voceDominante, setVoceDominante] = useState(voce.dominante);
    const [voceInformal, setVoceInformal] = useState(voce.informal);
    const [voceCondescendente, setVoceCondescendente] = useState(
        voce.condescendente
    );
    const [voceFormal, setVoceFormal] = useState(voce.formal);

    const [meioDominante, setMeioDominante] = useState(meio.dominante);
    const [meioinformal, setMeioinformal] = useState(meio.informal);
    const [meioCondescendente, setMeioCondescendente] = useState(
        meio.condescendente
    );
    const [meioFormal, setMeioFormal] = useState(meio.Formal);

    const [flexibilidadeDominante, setFlexibilidadeDominante] = useState(
        flexibilidade.Dominante
    );
    const [flexibilidadeinformal, setFlexibilidadeinformal] = useState(
        flexibilidade.informal
    );
    const [
        flexibilidadeCondescendente,
        setFlexibilidadeCondescendente
    ] = useState(flexibilidade.Condescendente);
    const [flexibilidadeFormal, setFlexibilidadeFormal] = useState(
        flexibilidade.Formal
    );

    useEffect(() => {
        voceDominante > 2
            ? setVoceDominante(24)
            : setVoceDominante(voceDominante);
        voceInformal > 2 ? setVoceInformal(24) : setVoceInformal(voceInformal);
        voceCondescendente > 2
            ? setVoceCondescendente(24)
            : setVoceCondescendente(voceDominante);
        voceFormal > 2 ? setVoceFormal(24) : setVoceFormal(voceDominante);

        meioDominante > 2
            ? setMeioDominante(24)
            : setMeioDominante(meioDominante);
        meioinformal > 2 ? setMeioinformal(24) : setMeioinformal(meioinformal);
        meioCondescendente > 2
            ? setMeioCondescendente(24)
            : setMeioCondescendente(meioCondescendente);
        meioFormal > 2 ? setMeioFormal(24) : setMeioFormal(meioFormal);

        flexibilidadeDominante > 2
            ? setFlexibilidadeDominante(24)
            : setFlexibilidadeDominante(flexibilidadeDominante);
        flexibilidadeinformal > 2
            ? setFlexibilidadeinformal(24)
            : setFlexibilidadeinformal(flexibilidadeinformal);
        flexibilidadeCondescendente > 2
            ? setFlexibilidadeCondescendente(24)
            : setFlexibilidadeCondescendente(flexibilidadeCondescendente);
        flexibilidadeFormal > 2
            ? setFlexibilidadeFormal(24)
            : setFlexibilidadeFormal(flexibilidadeFormal);
    }, []);

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
                            gridTemplateColumns: `${voce.dominante} ${voce.informal} ${voce.condescendente} ${voce.formal}`
                        }}
                    >
                        <div className="item dominanteColor first"></div>
                        <div className="item informal"></div>
                        <div className="item condenscendente"></div>
                        <div className="item formal last"></div>
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
                            gridTemplateColumns: `${meio.dominante} ${meio.informal} ${meio.condescendente} ${meio.formal}`
                        }}
                    >
                        <div className="item dominanteColor first"></div>
                        <div className="item informal"></div>
                        <div className="item condenscendente"></div>
                        <div className="item formal last"></div>
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
                            gridTemplateColumns: `${flexibilidade.dominante} ${flexibilidade.informal} ${flexibilidade.condescendente} ${flexibilidade.formal}`
                        }}
                    >
                        <div className="item dominanteColor first"></div>
                        <div className="item informal"></div>
                        <div className="item condenscendente"></div>
                        <div className="item formal last"></div>
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
                            <span style={{ color: "#5f4a87" }}>Dominante</span>
                        </div>
                        <div className="info">
                            <span className="dominante">{`${" "}`}</span>
                            <span style={{ color: "#5f4a87" }}>Informal</span>
                        </div>
                        <div className="info">
                            <span className="dominante">{`${" "}`}</span>
                            <span style={{ color: "#5f4a87" }}>
                                Condescendente
                            </span>
                        </div>
                        <div className="info last">
                            <span className="dominante">{`${" "}`}</span>
                            <span style={{ color: "#5f4a87" }}>Formal</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
