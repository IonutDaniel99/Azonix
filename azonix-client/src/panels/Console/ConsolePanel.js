import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";

const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsolePanel() {
    const dispatch = useDispatch();
    const isConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );

    useEffect(() => {
        socket.on("actualSeconds", (arg) => {
            console.log(arg);
        });

        return () => {
            socket.off("actualSeconds");
        };
    }, [dispatch]);

    return (
        <div className="w-full h-full bg-yellow-700">
            <h2 className="text-black ">{isConnected}</h2>
        </div>
    );
}

export default ConsolePanel;
