import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../common/PageProvider/ScreenHeader/reducers/headerReducer";

import consoleReducer from "../panels/Console/reducers/consoleReducer";
import weatherReducer from "../panels/Weather/reducers/weatherReducer";

export default configureStore({
    reducer: {
        consoleReducer: consoleReducer,
        weatherReducer: weatherReducer,
        headerReducer: headerReducer,
    },
});
