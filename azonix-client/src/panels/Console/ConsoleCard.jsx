import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { When } from "react-if";
import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";
import { useDispatch } from "react-redux";
import { setConnected, setDisconnected } from "./actions/consoleAction";
import { FALSE_STRING, TRUE_STRING } from "../../utils/constants";
const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsoleCard() {
    const [showConsole, setShowConsole] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on("connect", () => {
            dispatch(setConnected(TRUE_STRING));
            setShowConsole(true);
        });

        socket.on("disconnect", () => {
            dispatch(setDisconnected(FALSE_STRING));
            setShowConsole(false);
        });
        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, [dispatch]);

    return (
        <When condition={showConsole}>
            <div className="w-20 h-20 text-green-600 bg-red-500">
                <h2 className="truncate">ConsoleCard</h2>
            </div>
        </When>
    );
}

export default ConsoleCard;
