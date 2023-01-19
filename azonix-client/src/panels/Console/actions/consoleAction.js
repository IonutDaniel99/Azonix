export const setDisconnected = (condition) => {
    return {
        type: "DISCONNECTED",
        payload: condition,
    };
};

export const setConnected = (condition) => {
    return {
        type: "CONNECTED",
        payload: condition,
    };
};
