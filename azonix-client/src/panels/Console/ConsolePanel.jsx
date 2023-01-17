import io from 'socket.io-client'
import { createSignal, Show } from 'solid-js';
import { CONSOLE_SOCKET_IO_ADDRESS } from './console_config';

const socket = io(CONSOLE_SOCKET_IO_ADDRESS)

function ConsolePanel() {
    const [showConsole, setShowConsole] = createSignal(false)

    socket.on("connect", () => {
        setShowConsole(true)
    });

    socket.on("disconnect", () => {
        setShowConsole(false)
    });

    return (
        <h2 class='text-green-600'>ConsolePanel</h2>
    )
}

export default ConsolePanel;