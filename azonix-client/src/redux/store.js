import { configureStore } from "@reduxjs/toolkit";

import consoleReducer from "../panels/Console/reducers/consoleReducer";
import weatherReducer from "../panels/Weather/reducers/weatherReducer";

export default configureStore({
    reducer: {
        consoleReducer: consoleReducer,
        weatherReducer: weatherReducer,
    },
});
