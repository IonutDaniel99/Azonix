import ConsoleCard from "../../../panels/Console/ConsoleCard";
import WeatherCard from "../../../panels/Weather/WeatherCard";

function Springboard() {
    return (
        <div class="z-50 absolute top-0 w-20 h-full border-r-2 border-r-blue-900 bg-slate-800">
            <ConsoleCard />
            <WeatherCard />
        </div>
    )
}

export default Springboard;