import React from "react";
import io from "socket.io-client";

import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";

const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsolePanel() {
    socket.on("connect", () => {
        console.log('panelConsoleConnect')
    });

    socket.on("disconnect", () => {
        console.log('panelConsoleDisConnect')

    });
    return <div className="w-full h-full bg-yellow-700">
        <h2 className="text-black ">ConsolePanel</h2>
    </div>


}

export default ConsolePanel;
