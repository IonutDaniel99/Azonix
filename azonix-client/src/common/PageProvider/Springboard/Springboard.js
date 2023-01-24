import React from "react";
import ConsoleCard from "../../../panels/Console/ConsoleCard";
import WeatherCard from "../../../panels/Weather/WeatherCard";

function Springboard() {
    return (
        <div className="z-[100] w-22 h-full  bg-zinc-900">
            <ConsoleCard />
            <WeatherCard />
        </div>
    );
}

export default Springboard;
