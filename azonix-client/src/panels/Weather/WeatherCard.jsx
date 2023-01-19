import React, { useEffect, useState } from "react";
import { When } from "react-if";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { FALSE_STRING, TRUE_STRING } from "../../utils/constants";
import { setConnected, setDisconnected } from "./actions/weatherAction";
import { WEATHER_SOCKET_IO_ADDRESS } from "./weather_config";

const socket = io(WEATHER_SOCKET_IO_ADDRESS);

function WeatherCard() {
    const [showWeather, setShowWeather] = useState(false);
    const dispatch = useDispatch();

    const instances = useSelector((state) => state.weatherReducer.instances);

    useEffect(() => {
        socket.on("connect", () => {
            dispatch(setConnected(TRUE_STRING));
            setShowWeather(true);
        });

        socket.on("disconnect", () => {
            dispatch(setDisconnected(FALSE_STRING));
            setShowWeather(false);
        });
        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, [dispatch]);

    return (
        <When condition={showWeather}>
            <div
                className={`w-20 h-20 text-green-600  ${
                    instances === 0 ? "bg-yellow-500" : "bg-red-500"
                }`}
                draggable={true}
                unselectable="on"
                onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", "WEATHER_PANEL")
                }
            >
                <h2 className="truncate">Weather</h2>
            </div>
        </When>
    );
}

export default WeatherCard;
