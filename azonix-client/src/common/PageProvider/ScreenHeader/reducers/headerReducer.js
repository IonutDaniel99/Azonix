import { FALSE_STRING } from "../../../../utils/constants";

/* eslint-disable default-case */
const inititalState = { isFooterVisible: FALSE_STRING };
const headerReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "TOGGLE_FOOTER_BAR": {
            return { isFooterVisible: action.payload };
        }
    }
    return state;
};
export default headerReducer;
