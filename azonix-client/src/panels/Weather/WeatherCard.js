import React, { useEffect, useState } from "react";
import { When } from "react-if";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import ServiceCard from "../../common/Components/ServiceCard/ServiceCard";
import { FALSE_STRING, TRUE_STRING } from "../../utils/constants";
import { setConnected, setDisconnected } from "./actions/weatherAction";
import { WEATHER_SOCKET_IO_ADDRESS } from "./weather_config";
import { TiWeatherPartlySunny } from "react-icons/ti";

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
            <ServiceCard
                name={"Weather"}
                panelType={"WEATHER_PANEL"}
                instances={instances}
                icon={<TiWeatherPartlySunny size={24} />}
            />
        </When>
    );
}

export default WeatherCard;
