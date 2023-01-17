import React, { useState } from "react";
import io from "socket.io-client";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";
import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";

const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsoleCard() {
    const [showConsole, setShowConsole] = useState(false);

    socket.on("connect", () => {
        console.log("Connect Console");
        setShowConsole(true);
    });

    socket.on("disconnect", () => {
        console.log("Disconnect Console");
        setShowConsole(false);
    });

    return (
        <When condition={showConsole}>
            <div className="text-green-600 bg-red-500 w-20 h-20">
                <h2 className="truncate">ConsoleCard</h2>
            </div>
        </When>
    );
}

export default ConsoleCard;
