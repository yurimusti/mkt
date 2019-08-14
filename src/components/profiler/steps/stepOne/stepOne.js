import React, { useState, useEffect } from "react";
import "./index.scss";
import Header from "../../header";
import Footer from "../../footer";
import Breadcumb from "../../breadcrumb";
import Progress from "../../progress";
import Behavior from "../../behavior";
import Section from "../../section";
// import Smart from "../../../../assets/images/solides.png";
// import User from "../../../../assets/images/rostinho.png";
// import Company from "../../../../assets/images/company.png";

import optionsBehavior from "../../../../utils/optionsBehavior";
import ColorfulDash from "../../../../components/colorfulDash";

const StepOne = ({ dataFallbackArr, dataFallbackJumpToStepTwo }) => {
    const [arr, setArr] = useState([]);
    const [lengthArr, setLengthArr] = useState(0);
    const [jumpToStepTwo, setJumpToStepTwo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const _handleOnClick = (event, value) => {
        if (!event.currentTarget.classList.contains("selected")) {
            arr.map((e, i) => {
                if (e === value) {
                    arr.splice(i, 1);
                }
            });
        } else {
            arr.push(value);
        }
        setArr(arr);
        setLengthArr(arr.length);
        console.log(arr);
    };

    return (
        <div className="profiler-section-one">
            <ColorfulDash />
            <Header>
                {/* <img className="brand" src={Smart} alt="logo solides" /> */}
                <Breadcumb />
                {/* <div className="user">
                    <img src={User} alt="Image User" />
                    <span className="name-user">Nome do usuário</span>
                    <span className="email-user">usuario@empresa.com.br</span>
                </div>
                <div className="corp">
                    <img src={Company} alt="Image Company" />
                    <span className="name-user">Acme Coporation</span>
                    <span className="email-user">usuario@empresa.com.br</span>
                </div> */}
                <Progress>
                    <p>Passo 2 de 3</p>
                </Progress>
            </Header>
            <Section nameClass={"form"}>
                <div>
                    <div className="header-form">
                        <h1>
                            Marque abaixo os adjetivos{" "}
                            <span>que melhor te representam.</span>
                        </h1>
                        <p>
                            <b>Regras:</b> Responda sozinho, sem ajuda de
                            terceiros. Não interrompa o questionário com
                            distrações ou conversas.{" "}
                        </p>
                    </div>
                    <div className="body-form">
                        <form className="form-check">
                            {optionsBehavior.stepOne.map(option => {
                                return (
                                    <Behavior
                                        name={option.english}
                                        onClick={(event, children) =>
                                            _handleOnClick(event, children)
                                        }
                                    >
                                        {option.value}
                                    </Behavior>
                                );
                            })}
                        </form>
                    </div>
                </div>
            </Section>
            <Footer>
                <div className="next-step">
                    <button
                        className={lengthArr > 5 ? "active" : "disabled"}
                        disabled={lengthArr > 5 ? false : true}
                        onClick={() => {
                            setJumpToStepTwo(true);
                            dataFallbackJumpToStepTwo(jumpToStepTwo);
                            dataFallbackArr(arr);
                        }}
                        name="btnStep"
                    >
                        Próximo Passo
                    </button>
                </div>
            </Footer>
        </div>
    );
};

export default StepOne;
