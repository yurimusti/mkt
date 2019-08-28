import React, { useState, useEffect } from "react";
import "./index.scss";
import ButtonBlock from "../../profiler/buttonBlock";
import axios from "axios";
import Input from "../../../components/InputCustom";

function FormProfilerRegister({
  handleSubmit,
  registerFallback,
  getPassport,
  jsonRdStation
}) {
  const [blockStep, setBlockStep] = useState(true);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [gender, setGender] = useState("");
  const [company, setCompany] = useState("");
  const [sizeCompany, setSizeCompany] = useState("");
  const [position, setPosition] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  // const [cellPhone, setCell] = useState("");
  const [phone, setphone] = useState("");
  const url = window.location.href.split("/");

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      cpf !== "" &&
      gender !== "" &&
      position !== "" &&
      sizeCompany !== "" &&
      company !== "" &&
      phone !== "" &&
      validEmail(email)
    ) {
      setBlockStep(false);
    } else {
      setBlockStep(true);
    }
  }, [name, email, cpf, gender, position, sizeCompany, phone, company]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validEmail = value => {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return re.test(value);
  };

  const _handleSubmitForm = () => {
    const json = {
      name: name,
      email: email,
      gender: gender,
      idNumber: cpf,
      company: company,
      phone: phone
    };
    let dadosRdStation = {
      email: email,
      Nome: name,
      "Cargo RH": position,
      "Tamanho de empresa": sizeCompany,
      Empresa: company,
      "Telefone para contato": phone,
      identificador: url[4],
      token_rdstation: "9b051f9f415752cafe1400742dd07e6f"
    };
    let dadosHubspot = {
      properties: [
        {
          property: "cargorh",
          value: position
        },
        {
          property: "company",
          value: company
        },
        {
          property: "email",
          value: email
        },
        {
          property: "firstname",
          value: name
        },
        {
          property: "phone",
          value: phone
        },
        {
          property: "tamanho_de_empresa",
          value: sizeCompany
        },
        {
          property: "token_evento",
          value: url[4]
        }
      ]
    };

    jsonRdStation(dadosRdStation);

    axios.post(
      "https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/" +
        email +
        "?hapikey=895c0761-9dd1-417b-812c-e54425776d64",
      dadosHubspot
    );
    registerFallback(json);
  };

  return (
    <div className="registerProfiler">
      <form id="registerProfiler" onSubmit={handleSubmit}>
        <Input
          onChange={event => setName(event.target.value)}
          type="othersInputs"
          name="name"
          id="name"
          required
          placeholder="Nome completo*"
        />
        <Input
          onChange={event => setEmail(event.target.value)}
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email*"
        />
        <Input
          name="cpf"
          id="cpf"
          onChange={event => setCpf(event.target.value)}
          type="cpf"
          placeholder="CPF*"
        />
        <select
          onChange={event => setGender(event.target.value)}
          name="gender"
          id="gender"
        >
          <option value>Gênero*</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="male">Não binário</option>
        </select>
        <span className="alert">Caso não exista, deixe em branco</span>
        <Input
          onChange={event => setCompany(event.target.value)}
          type="othersInputs"
          name="company"
          id="company"
          placeholder="Empresa*"
        />
        <select
          onChange={event => setSizeCompany(event.target.value)}
          name="sizeCompany"
          id="sizeCompany"
        >
          <option value="Até 14 funcionários">Tamanho da empresa</option>
          <option value="Até 14 funcionários">Até 14 funcionários</option>
          <option value="De 15 a 29 funcionários">
            De 15 a 29 funcionários
          </option>
          <option value="De 30 a 49 funcionários">
            De 30 a 49 funcionários
          </option>
          <option value="De 50 a 99 funcionários">
            De 50 a 99 funcionários
          </option>
          <option value="De 100 a 199 funcionários">
            De 100 a 199 funcionários
          </option>
          <option value="De 200 a 499 funcionários">
            De 200 a 499 funcionários
          </option>
          <option value="500 funcionários ou mais">
            500 funcionários ou mais
          </option>
        </select>
        <select
          onChange={event => setPosition(event.target.value)}
          name="position"
          id="position"
        >
          <option value="">Cargo*</option>
          <option value="Analista de RH">Analista de RH</option>
          <option value="Business Partner de RH">Business Partner de RH</option>
          <option value="Coordenador de RH">Coordenador de RH</option>
          <option value="Diretor de RH">Diretor de RH</option>
          <option value="Gerente de RH">Gerente de RH</option>
          <option value="Sócio/CEO">Sócio/CEO</option>
          <option value="Coach">Coach</option>
          <option value="Consultor de RH">Consultor de RH</option>
          <option value="Estagiário de RH">Estagiário de RH</option>
          <option value="Estudante">Estudante</option>
          <option value="Buscando recolocação">Buscando recolocação</option>
          <option value="Outros">Outros</option>
        </select>
        <Input
          onChange={event => setphone(event.target.value)}
          className="input-custom"
          type="phone"
          name="phone"
          id="phone"
          placeholder="Telefone com (DDD) ou WhatsApp*"
        />
        <ButtonBlock isBlock={blockStep} onClick={_handleSubmitForm} />
      </form>
    </div>
  );
}

export default FormProfilerRegister;
