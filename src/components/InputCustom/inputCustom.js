import React, { useState } from "react";
import InputMask from "react-input-mask";
import "./index.scss";
import { notification } from "antd";

const InputCustom = ({ type, onBlur, ...rest }) => {
  const [valid, setValid] = useState(true);

  const validEmail = value => {
    const valida = () => {
      var re = /\S+@\S+\.\S+/;
      return re.test(value);
    };

    if (valida(value)) {
      setValid(valida(value));
    } else {
      notification.warning({
        message: "Alerta",
        description: "Email inválido."
      });
    }
  };

  const renderInput = () => {
    switch (type) {
      case "date":
        return (
          <div className="custom-input">
            <input
              type="text"
              name="date"
              id="date"
              placeholder="Data de nascimento"
              onKeyPress={event => {
                if (event.target.value.match(/^\d{2}$/) !== null) {
                  event.target.value = event.target.value + "/";
                } else if (
                  event.target.value.match(/^\d{2}\/\d{2}$/) !== null
                ) {
                  event.target.value = event.target.value + "/";
                }
              }}
              maxlength="10"
            />
          </div>
        );

      case "cpf":
        return (
          <div className="custom-input">
            <InputMask
              mask="99999999999"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "cnh":
        return (
          <div className="custom-input">
            <InputMask
              mask="99999999999"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "tituloEleitor":
        return (
          <div className="custom-input">
            <InputMask
              mask="9999.9999.9999"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "number":
        return (
          <div className="custom-input">
            <input className="number" type="number" {...rest} />
          </div>
        );

      case "cep":
        return (
          <div className="custom-input">
            <InputMask
              mask="99.999-999"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "cellphone":
        return (
          <div className="custom-input">
            <InputMask
              mask="99 9 9999-9999"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "phone":
        return (
          <div className="custom-input">
            <InputMask
              // mask="99 9999-9999"
              maxLength="11"
              {...rest}
              style={{ borderRadius: 50 }}
            />
          </div>
        );

      case "email":
        return (
          <div className="custom-input">
            <input
              {...rest}
              style={
                valid === true
                  ? { borderRadius: 50 }
                  : {
                      borderRadius: 50,
                      border: "1px solid red"
                    }
              }
              onBlur={e =>
                e.target.value !== ""
                  ? validEmail(e.target.value)
                  : setValid(true)
              }
            />
          </div>
        );

      case "othersInputs":
        return (
          <div className="custom-input">
            <input
              {...rest}
              style={{
                borderRadius: 50
              }}
            />
          </div>
        );

      default:
        return (
          <div className="custom-input">
            <input className="default" {...rest} />
          </div>
        );
    }
  };
  return renderInput();
};

export default InputCustom;
