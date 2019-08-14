// import * as actions from "./actions";
import * as repository from "./repository";
// import { filter } from "rsvp";

export const passportGetByToken = token => async dispatch => {
    return repository.passportGetByToken(token);
};

export const passportPostByToken = (token, data) => async dispatch => {
    return repository.passportPostByToken(token, data);
};

export const resultManager = id => async dispatch => {
    return repository.passportPostByToken(id);
};
