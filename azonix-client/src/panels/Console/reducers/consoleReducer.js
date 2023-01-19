import { FALSE_STRING } from "../../../utils/constants";

/* eslint-disable default-case */
const inititalState = { isConnected: FALSE_STRING, timerOff: 0 };
const consoleReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "CONSOLE_CONNECTED": {
            return { ...state, isConnected: action.payload };
        }
        case "CONSOLE_DISCONNECTED": {
            return { ...state, isConnected: action.payload };
        }
        case "CONSOLE_DISCONNECTED_TIMER": {
            return { ...state, timerOff: state.timerOff + action.payload };
        }
    }
    return state;
};
export default consoleReducer;
