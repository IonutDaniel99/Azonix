export const toggleFooterBar = (condition) => {
    return {
        type: "TOGGLE_FOOTER_BAR",
        payload: condition,
    };
};
