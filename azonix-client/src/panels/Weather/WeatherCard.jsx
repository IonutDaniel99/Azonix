import React, { useState } from "react";
import { When } from "react-if";
import io from "socket.io-client";
import { WEATHER_SOCKET_IO_ADDRESS } from "./weather_config";

const socket = io(WEATHER_SOCKET_IO_ADDRESS);

function WeatherCard() {
    const [showWeather, setShowWeather] = useState(false);

    socket.on("connect", () => {
        console.log("Connect Weather");
        setShowWeather(true);
    });

    socket.on("disconnect", () => {
        console.log("Disconect Weather");
        setShowWeather(false);
    });

    return (
        <When condition={showWeather}>
            <div className="w-20 h-20 text-green-600 bg-yellow-500"
                draggable={true}
                unselectable="on"
                onDragStart={e => e.dataTransfer.setData("text/plain", "WEATHER_PANEL")}>
                <h2 className="truncate">Weather</h2>
            </div>
        </When>
    );
}

export default WeatherCard;
