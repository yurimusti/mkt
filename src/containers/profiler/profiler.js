import React, { Fragment, useState, useEffect } from "react";
import Container from "../../components/profiler/container";
import Row from "../../components/profiler/row";
import Welcome from "../../components/profiler/welcome";
import FormProfilerRegister from "../../components/forms/profilerRegisterForm";
import Header from "../../components/profiler/header";
import Section from "../../components/profiler/section";
import Smart from "../../assets/images/solides.png";
import StepOne from "../../components/profiler/steps/stepOne";
import StepTwo from "../../components/profiler/steps/stepTwo";
import Result from "./resultProfilerNoAuth";
import ColorfulDash from "../../components/colorfulDash";
import { notification } from "antd";
import "./index.scss";

import * as passportsService from "../../state/profiler/services";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

function Profiler({ passportGetByToken, passportPostByToken, history }) {
  const [blockStep, setBlockStep] = useState(false);
  const dateNow = new Date();
  const url = window.location.href.split("/");
  const [step, setStep] = useState(0);
  const [registerData, setRegisterData] = useState({});
  const [iAmChosenAdjectives, setArrayAdjectives] = useState([]);
  const [shouldBeChosenAdjectives, setArrayPerception] = useState([]);
  const [linkGeneric, setLinkGeneric] = useState(false);
  const [getPassport, setGetPassport] = useState([]);
  const [canJumpStepFinal, setCanJumpStepFinal] = useState(false);
  const [canGetResultProfiler, canSetResultProfiler] = useState(false);
  const [profiler, setProfiler] = useState({});
  const [infoUser, setInfoUser] = useState({});
  const [testStartTime, setTestStartTime] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  async function fetchGetPassportByToken() {
    await passportGetByToken(url[4])
      .then(r => {
        setGetPassport(r.data);
        if (r.data.result !== undefined) {
          setProfiler(r.data.result);
          setInfoUser(r.data);
          setStep(3);
          setLinkGeneric(true);
        }
      })
      .catch(err => {
        if (err) {
          notification.error({
            message: "Erro referente ao passaporte",
            description: `${err}`
          });
        } else {
          history.push("/peopleAnalytics");
        }
      });
  }

  useEffect(() => {
    fetchGetPassportByToken();
  }, []);


  useEffect(() => {
    if (registerData !== {}) {
      setTestStartTime(
        dateNow.getFullYear() +
          "-" +
          dateNow.getMonth() +
          "-" +
          dateNow.getDay() +
          "-" +
          dateNow.getFullYear() +
          " " +
          dateNow.getHours() +
          ":" +
          dateNow.getMinutes() +
          ":" +
          dateNow.getSeconds()
      );
    }
  }, [registerData]);

  const _handleClick = obj3 => {
    const obj1 = {
      iAmChosenAdjectives,
      testStartTime,
      testEndTime:
        dateNow.getFullYear() +
        "-" +
        dateNow.getMonth() +
        "-" +
        dateNow.getDay() +
        "-" +
        dateNow.getFullYear() +
        " " +
        dateNow.getHours() +
        ":" +
        dateNow.getMinutes() +
        ":" +
        dateNow.getSeconds()
    };
    const obj2 = registerData;
    const result = {
      ...obj1,
      ...obj2,
      shouldBeChosenAdjectives: obj3
    };

    setBlockStep(true);

    passportPostByToken(url[4], result)
      .then(res => {
        if (res.status === 200 && res.data.result !== undefined) {
          canSetResultProfiler(true);
          setProfiler(res.data.result);
          setInfoUser(res.data);
          setLinkGeneric(false);
        } else if (res.status === 200 && res.data.result === undefined) {
          canSetResultProfiler("noProfiler");
        } else {
          canSetResultProfiler(false);
          setLinkGeneric(false);
        }
      })
      .catch(err => {
        notification.error({
          message: "Erro referente ao token",
          description: `${err}`
        });
      });
  };

  useEffect(() => {
    if (canGetResultProfiler === true) {
      nextStep();
    } else if (canGetResultProfiler === "noProfiler") {
      console.log("SUCESSO - SEM RELATÓRIO");
    }
  }, [canGetResultProfiler]);

  const _wizardStep = () => {
    switch (step) {
      case 0:
        return (
          <Fragment>
            {step === 0 && (
              <div className="profiler-container">
                <ColorfulDash />
                <Header>
                  <img className="logoInitial" src={Smart} alt="smart" />
                </Header>
                <Section nameClass={"welcome"}>
                  <Container>
                    <Row>
                      <Welcome getPassport={getPassport} />
                    </Row>
                  </Container>
                </Section>
                <Section nameClass={"form-profile"}>
                  <Container>
                    <FormProfilerRegister
                      getPassport={getPassport}
                      handleSubmit={nextStep}
                      registerFallback={value => setRegisterData(value)}
                    />
                  </Container>
                </Section>
              </div>
            )}
          </Fragment>
        );
      case 1:
        return (
          <div className="profiler-container">
            {step === 1 && (
              <StepOne
                dataFallbackArr={value => setArrayAdjectives(value)}
                dataFallbackJumpToStepTwo={value => {
                  if (!value) {
                    setStep(2);
                  }
                }}
              />
            )}
          </div>
        );
      case 2:
        return (
          <div className="profiler-container">
            {step === 2 && (
              <StepTwo
                dataFallbackArr={value => {
                  setArrayPerception(value);
                }}
                dataFallBackFinish={value => {
                  setCanJumpStepFinal(value);
                }}
                handleClick={_handleClick}
                blockStep={blockStep}
              />
            )}
          </div>
        );
      case 3:
        return (
          <Result
            profiler={profiler}
            canShowAll={linkGeneric}
            infoUser={infoUser}
          />
        );
      default:
        break;
    }
  };

  return _wizardStep();
}

const mapStateToProps = state => ({
  // modal: state.user.modal
});

const mapDispatchToProps = {
  passportGetByToken: passportsService.passportGetByToken,
  passportPostByToken: passportsService.passportPostByToken
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Profiler);
