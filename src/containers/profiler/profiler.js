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
import Moment from "moment";
import { notification } from "antd";
import "./index.scss";

import * as passportsService from "../../state/profiler/services";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Photo from "../../components/profiler/photo/photo";

function Profiler({
  passportGetByToken,
  passportPostByToken,
  hubspot,
  history
}) {
  const url = window.location.href.split("/");
  const [step, setStep] = useState(0);
  const [registerData, setRegisterData] = useState({});
  const [iAmChosenAdjectives, setArrayAdjectives] = useState([]);
  const [shouldBeChosenAdjectives, setArrayPerception] = useState([]);
  const [blockStep, setBlockStep] = useState(false);
  const [linkGeneric, setLinkGeneric] = useState();
  const [getPassport, setGetPassport] = useState([]);
  const [canJumpStepFinal, setCanJumpStepFinal] = useState(false);
  const [canGetResultProfiler, canSetResultProfiler] = useState(false);
  const [profiler, setProfiler] = useState({});
  const [infoUser, setInfoUser] = useState({});
  const [testStartTime, setTestStartTime] = useState({});
  const [avaliablesPositions, setAvaliablesPositions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [photoBase64, setPhotoBase64] = useState("");
  const [registerDadosHubspot, setRegisterDataHubspot] = useState({});
  const [objRd, setObjRd] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  async function fetchGetPassportByToken() {
    await passportGetByToken(url[4])
      .then(r => {
        setGetPassport(r.data);
        setAvaliablesPositions(r.data.positions);
        if (r.data.result !== undefined) {
          setProfiler(r.data.result);
          setInfoUser(r.data);
          setStep(3);
          setLinkGeneric(false);
          setShowResult(true);
        } else {
          setLinkGeneric(true);
          setShowResult(false);
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

  async function fetchDadosHubspot() {
    await hubspot(registerDadosHubspot)
      .then(r => {
        console.log("SUCESSO", r);
      })
      .catch(err => {
        if (err) {
          notification.error({
            message: "Erro referente ao inserir dados",
            description: `${err}`
          });
        }
      });
  }

  useEffect(() => {
    fetchGetPassportByToken();
  }, []);

  useEffect(() => {
    if (registerData !== {}) {
      setTestStartTime(Moment(Date.now()).format("YYYY-MM-DD H:mm:ss"));
    }
  }, [registerData]);

  const _handleClick = obj3 => {
    const obj1 = {
      iAmChosenAdjectives,
      testStartTime,
      testEndTime: Moment(Date.now()).format("YYYY-MM-DD H:mm:ss")
    };
    const obj2 = registerData;
    const result = {
      ...obj1,
      ...obj2,
      shouldBeChosenAdjectives: obj3,
      picture: photoBase64
    };

    setBlockStep(true);

    fetchDadosHubspot();

    passportPostByToken(url[4], result)
      .then(res => {
        if (res.status === 200 && res.data.result !== undefined) {
          canSetResultProfiler(true);
          setProfiler(res.data.result);
          setInfoUser(res.data);
        } else if (res.status === 200 && res.data.result === undefined) {
          canSetResultProfiler("noProfiler");
        } else {
          canSetResultProfiler(false);
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
        if (linkGeneric === true) {
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
                    <Photo
                      fallbackPhoto={value => setPhotoBase64(value)}
                      getPicture={""}
                    />
                    <Container>
                      <FormProfilerRegister
                        getPassport={getPassport}
                        getPositions={avaliablesPositions}
                        handleSubmit={nextStep}
                        registerFallback={value => setRegisterData(value)}
                        registerFallbackHubspot={value =>
                          setRegisterDataHubspot(value)
                        }
                      />
                    </Container>
                  </Section>
                </div>
              )}
            </Fragment>
          );
        } else {
          return null;
        }
      case 1:
        return (
          <div className="profiler-container">
            {step === 1 && (
              <StepOne
                registerData={registerData}
                photoBase64={photoBase64}
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
                registerData={registerData}
                photoBase64={photoBase64}
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
            canShowAll={showResult}
            isFillLink={linkGeneric}
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
  passportPostByToken: passportsService.passportPostByToken,
  hubspot: passportsService.hubspot
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Profiler);
