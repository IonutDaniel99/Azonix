import React from "react";
import ConsoleCard from "../../../panels/Console/ConsoleCard";
import WeatherCard from "../../../panels/Weather/WeatherCard";

function Springboard() {
    return (
        <div className="z-50 absolute top-0 w-20 h-full border-r-2 border-r-slate-700 bg-zinc-900">
            <ConsoleCard />
            <WeatherCard />
        </div>
    );
}

export default Springboard;
