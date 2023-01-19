export const setDisconnected = (condition) => {
    return {
        type: "CONSOLE_DISCONNECTED",
        payload: condition,
    };
};

export const setConnected = (condition) => {
    return {
        type: "CONSOLE_CONNECTED",
        payload: condition,
    };
};
