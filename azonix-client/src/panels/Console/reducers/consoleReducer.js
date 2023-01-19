import { FALSE_STRING } from "../../../utils/constants";

/* eslint-disable default-case */
const inititalState = { isConnected: FALSE_STRING };
const consoleReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "CONNECTED": {
            return { ...state, isConnected: action.payload };
        }
        case "DISCONNECTED": {
            return { ...state, isConnected: action.payload };
        }
    }
    return state;
};
export default consoleReducer;
