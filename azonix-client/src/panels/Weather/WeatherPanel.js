import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { setInstance } from "./actions/weatherAction";

import { WEATHER_SOCKET_IO_ADDRESS } from "./weather_config";

const socket = io(WEATHER_SOCKET_IO_ADDRESS);

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
