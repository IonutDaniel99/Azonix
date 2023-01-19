import React from "react";
import { useSelector } from "react-redux";

function ScreenHeader() {
    const isConsoleConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );
    const isWeatherConnected = useSelector(
        (state) => state.weatherReducer.isConnected
    );

    return (
        <div className="bg-darkBlue h-7 flex gap-12">
            <h2>Status</h2>
            <h2>Console: {isConsoleConnected}</h2>
            <h2>Weather: {isWeatherConnected}</h2>
        </div>
    );
}

export default ScreenHeader;
