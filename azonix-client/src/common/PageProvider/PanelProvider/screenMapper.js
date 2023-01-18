import ConsolePanel from "../../../panels/Console/ConsolePanel";
import WeatherPanel from "../../../panels/Weather/WeatherPanel";

export const SCREEN_MAPPER = {
    "CONSOLE_PANEL": {
        id: 5800,
        panelName: "Console",
        panelComponent: <ConsolePanel />
    },
    "WEATHER_PANEL": {
        id: 5801,
        panelName: "Weather",
        panelComponent: <WeatherPanel />
    }
}