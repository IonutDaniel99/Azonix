import React from "react";
import { useSelector } from "react-redux";

function ScreenHeader() {
    const isConsoleConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );
    const isWeatherConnected = useSelector(
        (state) => state.weatherReducer.isConnected
    );

    const down = "font-medium text-red-500 animate-errorEaseIn";
    const up = "font-medium text-green-500";

    return (
        <div className="bg-darkBlue h-7 flex gap-12 border-b-2 border-slate-800 ">
            <h2>Status</h2>
            <p className={isConsoleConnected ? up : down}>Console</p>
            <p className={isWeatherConnected ? up : down}>Weather</p>
        </div>
    );
}

export default ScreenHeader;
