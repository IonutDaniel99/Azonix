import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFooterBar } from "./actions/headerActions";

function ScreenHeader() {
    const dispatch = useDispatch();

    const isConsoleConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );
    const isWeatherConnected = useSelector(
        (state) => state.weatherReducer.isConnected
    );
    const isFooterVisible = useSelector(
        (state) => state.headerReducer.isFooterVisible
    );

    const handleToggleFooterBar = () =>
        dispatch(toggleFooterBar(!isFooterVisible));

    const down = "font-medium text-red-500 animate-errorEaseIn";
    const up = "font-medium text-green-500";

    return (
        <div className="bg-darkBlue h-7 flex gap-12 border-b-2 border-slate-800">
            <p
                onClick={() => handleToggleFooterBar()}
                style={{
                    backgroundColor: isFooterVisible
                        ? "rgb(37 99 235)"
                        : "rgb(22 163 74)",
                }}
                className="w-20 text-center text-amber-50 border-b-2 border-r-2 border-slate-800"
            >
                Footer
            </p>
            <p className={isConsoleConnected ? up : down}>Console</p>
            <p className={isWeatherConnected ? up : down}>Weather</p>
        </div>
    );
}

export default ScreenHeader;
