import React from "react";
import {
    ProfilesBar,
    MediumRequirement,
    SearchResults,
    SituationalIndicator,
    CompareProfilers,
    Competences,
    TalentsArea
} from "./components";

const Charts = ({
    type,
    profilesBar = {
        executor: "25",
        planejador: "25%",
        comunicador: "25%",
        analista: "25%"
    },
    mediumRequirement = {
        voce: {
            executor: "25%",
            planejador: "25%",
            comunicador: "25%",
            analista: "25%"
        },
        meio: {
            executor: "25%",
            planejador: "25%",
            comunicador: "25%",
            analista: "25%"
        },
        flexibilidade: {
            executor: "25%",
            planejador: "25%",
            comunicador: "25%",
            analista: "25%"
        }
    },
    searchResults = {
        voce: {
            dominante: "25%",
            informal: "25%",
            condescendente: "25%",
            formal: "25%"
        },
        meio: {
            dominante: "25%",
            informal: "25%",
            condescendente: "25%",
            formal: "25%"
        },
        flexibilidade: {
            dominante: "25%",
            informal: "25%",
            condescendente: "25%",
            formal: "25%"
        }
    },
    compareProfilers = {
        negative: {
            executor: "35%",
            planejador: "45%",
            comunicador: "25%",
            analista: "75%"
        },
        positive: {
            executor: "85%",
            planejador: "25%",
            comunicador: "50%",
            analista: "25%"
        }
    },
    situationalIndicator = {
        description: "Muito bom",
        percentual: 25
    },
    talents = {
        data1: 0,
        data2: 0,
        data3: 3,
        data4: 1,
        data5: 1,
        data6: 3,
        data7: 3,
        data8: 3,
        data9: 3,
        data10: 3,
        data11: 3,
        data12: 3,
        data13: 3,
        data14: 3,
        data15: 3,
        data16: 3,
        data17: 3,
        data18: 3,
        data19: 3,
        data20: 3
    },
    talentsArea = {
        dx1: 30,
        dy1: 10,
        dx2: 22,
        dy2: -10
    }
}) => {
    const renderChart = () => {
        switch (type) {
            case "profilesBar":
                return (
                    <ProfilesBar
                        executor={profilesBar.executor}
                        planejador={profilesBar.planejador}
                        comunicador={profilesBar.comunicador}
                        analista={profilesBar.analista}
                    />
                );

            case "mediumRequirement":
                return (
                    <MediumRequirement
                        voce={mediumRequirement.voce}
                        meio={mediumRequirement.meio}
                        flexibilidade={mediumRequirement.flexibilidade}
                    />
                );

            case "searchResults":
                return (
                    <SearchResults
                        voce={searchResults.voce}
                        meio={searchResults.meio}
                        flexibilidade={searchResults.flexibilidade}
                    />
                );

            case "compareProfilers":
                return (
                    <CompareProfilers
                        negative={compareProfilers.negative}
                        positive={compareProfilers.positive}
                    />
                );

            case "situationalIndicator":
                return (
                    <SituationalIndicator
                        description={situationalIndicator.description}
                        percentual={situationalIndicator.percentual}
                    />
                );
            case "competences":
                return (
                    <Competences
                        data1={talents.data1}
                        data2={talents.data2}
                        data3={talents.data3}
                        data4={talents.data4}
                        data5={talents.data5}
                        data6={talents.data6}
                        data7={talents.data7}
                        data8={talents.data8}
                        data9={talents.data9}
                        data10={talents.data10}
                        data11={talents.data11}
                        data12={talents.data12}
                        data13={talents.data13}
                        data14={talents.data14}
                        data15={talents.data15}
                        data16={talents.data16}
                        data17={talents.data17}
                        data18={talents.data18}
                        data19={talents.data19}
                        data20={talents.data20}
                    />
                );
            case "talentsArea":
                return (
                    <TalentsArea
                        dx1={talentsArea.dx1}
                        dy1={talentsArea.dy1}
                        dx2={talentsArea.dx2}
                        dy2={talentsArea.dy2}
                    />
                );
            default:
                break;
        }
    };

    return renderChart();
};

export default Charts;
