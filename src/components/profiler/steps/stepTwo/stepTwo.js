import React, { useState, useEffect } from "react";
import "./index.scss";
import Header from "../../header";
import Footer from "../../footer";
import Breadcumb from "../../breadcrumb";
import Progress from "../../progress";
import Behavior from "../../behavior";
import Section from "../../section";
// import Smart from "../../../../assets/images/solides.png";
import ButtonBlock from "../../../profiler/buttonBlock";
// import User from "../../../../assets/images/rostinho.png";
// import Company from "../../../../assets/images/company.png";

import ColorfulDash from "../../../../components/colorfulDash";
import optionsBehavior from "../../../../utils/optionsBehavior";

const StepTwo = ({
    dataFallbackArr,
    dataFallBackFinish,
    handleClick,
    blockStep
}) => {
    const [arr, setArr] = useState([]);
    const [lengthArr, setLengthArr] = useState(0);

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
    };

    return (
        <div className="profiler-section-two">
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
                <Progress complete={true}>
                    <p>Passo 3 de 3</p>
                </Progress>
            </Header>
            <Section nameClass={"form"}>
                <div>
                    <div className="header-form">
                        <h1>
                            Agora, marque, na sua percepção
                            <span>
                                como os outros pensam que você deveria ser
                                (atributos que você tenha ou não)
                            </span>
                        </h1>
                        <p>
                            <b>Regras:</b> Responda sozinho, sem ajuda de
                            terceiros. Não interrompa o questionário com
                            distrações ou conversas.
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
                    {blockStep === false ? (
                        <button
                            className={lengthArr > 5 ? "active" : "disabled"}
                            disabled={lengthArr > 5 ? false : true}
                            onClick={() => {
                                dataFallbackArr();
                                dataFallBackFinish(true);
                                handleClick(arr);
                            }}
                            name="btnStep"
                        >
                            Próximo Passo
                        </button>
                    ) : (
                        <button
                            className="disabled"
                            disabled={true}
                            name="btnStep"
                        >
                            Próximo Passo
                        </button>
                    )}
                </div>
            </Footer>
        </div>
    );
};

export default StepTwo;
