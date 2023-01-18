import React from "react";
import io from "socket.io-client";

import { WEATHER_SOCKET_IO_ADDRESS } from "./weather_config";

const socket = io(WEATHER_SOCKET_IO_ADDRESS);

function WeatherPanel() {
    socket.on("connect", () => {
        console.log('panelWConnect')
    });

    socket.on("disconnect", () => {
        console.log('panelWDisConnect')

    });
    return <div className="w-full h-full bg-emerald-700">
        <h2 className="text-black ">Weather Panel</h2>
    </div>
}

export default WeatherPanel;
