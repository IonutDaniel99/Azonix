import React, { useState } from "react";
import io from "socket.io-client";
import { When } from "react-if";
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
            <div className="w-20 h-20 text-green-600 bg-red-500 droppable-element"
                draggable={true}
                unselectable="on"
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                onDragStart={e => e.dataTransfer.setData("text/plain", "CONSOLE_PANEL")}>
                <h2 className="truncate">ConsoleCard</h2>
            </div>
        </When>
    );
}

export default ConsoleCard;
