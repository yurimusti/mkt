import axios from "axios";
import qs from "querystring";

export const passportGetByToken = async token => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://system.solides.com/pt/api/v2/passports/" + token)
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
        "https://system.solides.com/pt/api/v2/passports/" +
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

export const hubspot = async json => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return new Promise((resolve, reject) => {
    axios
      .post(
        "https://mktapi.solides.com/events/eventsform",
        qs.stringify(json),
        config
      )
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
