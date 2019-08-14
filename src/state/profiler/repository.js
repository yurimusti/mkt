import axios from "axios";
//arthur esteve aqui

export const passportGetByToken = async token => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://system.solides.com/pt-BR/api/v2/passports/" + token)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const passportPostByToken = async (token, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://system.solides.com/pt-BR/api/v2/passports/" +
          token +
          "/answer",
        data
      )
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const resultManager = async id => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://system.solides.com/pt-BR/api/v2/passports/" + id)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
