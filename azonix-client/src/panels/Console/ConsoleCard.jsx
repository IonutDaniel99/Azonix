import io from 'socket.io-client'
import { createSignal, Show } from 'solid-js';
import { CONSOLE_SOCKET_IO_ADDRESS } from './console_config';

const socket = io(CONSOLE_SOCKET_IO_ADDRESS)

function ConsoleCard() {
    const [showConsole, setShowConsole] = createSignal(false)

    socket.on("connect", () => {
        console.log('Connect Console')
        setShowConsole(true)
    });

    socket.on("disconnect", () => {
        console.log('Disconnect Console')
        setShowConsole(false)
    });

    return (
        <Show when={showConsole()}>
            <div class='text-green-600 bg-red-500 w-20 h-20'>
                <h2 class='truncate'>ConsoleCard</h2>
            </div>
        </Show>
    )
}

export default ConsoleCard;