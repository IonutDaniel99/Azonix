import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInstance } from "./actions/weatherAction";

function WeatherPanel() {
    const dispatch = useDispatch();
    const isConnected = useSelector(
        (state) => state.weatherReducer.isConnected
    );
    useEffect(() => {
        dispatch(setInstance(1));
        return () => dispatch(setInstance(0));
    }, [dispatch]);

    return (
        <div className="w-full h-full bg-[#202327]">
            <h2 className="text-white ">{isConnected}</h2>
        </div>
    );
}

export default WeatherPanel;
