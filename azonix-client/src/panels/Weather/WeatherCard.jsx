import io from 'socket.io-client'
import { createSignal, Show } from 'solid-js';
import { WEATHER_SOCKET_IO_ADDRESS } from './weather_config';

const socket = io(WEATHER_SOCKET_IO_ADDRESS)

function WeatherCard() {
    const [showWeather, setShowWeather] = createSignal(false)

    socket.on("connect", () => {
        console.log('Connect Weather')
        setShowWeather(true)
    });

    socket.on("disconnect", () => {
        console.log('Disconect Weather')
        setShowWeather(false)
    });

    return (
        <Show when={showWeather()}>
            <div class='text-green-600 bg-yellow-500 w-20 h-20'>
                <h2 class='truncate'>WeatherCard</h2>
            </div>
        </Show>
    )
}

export default WeatherCard;