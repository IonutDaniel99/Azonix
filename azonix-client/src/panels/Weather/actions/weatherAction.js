export const setDisconnected = (condition) => {
    return {
        type: "WEATHER_DISCONNECTED",
        payload: condition,
    };
};

export const setConnected = (condition) => {
    return {
        type: "WEATHER_CONNECTED",
        payload: condition,
    };
};

export const setInstance = (condition) => {
    return {
        type: "WEATHER_INSTANCES",
        payload: condition,
    };
};
