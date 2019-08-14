import * as types from "./types";

const initialState = {
    data: {
        employeeDetails: {
            name: "Arthur"
        }
    }
};

const reducers = (state = initialState.data, action) => {
    switch (action.type) {
        case types.SUCCESS_LOGIN:
            return { ...state, user: action.user };
        default:
            return state;
    }
};

export { initialState };
export default reducers;
