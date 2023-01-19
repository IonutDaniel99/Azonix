import { FALSE_STRING } from "../../../utils/constants";

/* eslint-disable default-case */
const inititalState = { isConnected: FALSE_STRING, instances: 0 };
const weatherReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "WEATHER_CONNECTED": {
            return { ...state, isConnected: action.payload };
        }
        case "WEATHER_DISCONNECTED": {
            return { ...state, isConnected: action.payload };
        }
        case "WEATHER_INSTANCES": {
            return { ...state, instances: action.payload };
        }
    }
    return state;
};
export default weatherReducer;
