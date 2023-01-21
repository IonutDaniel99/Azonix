import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";

// const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsolePanel() {
    // const dispatch = useDispatch();
    const isConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );

    // useEffect(() => {
    //     socket.on("actualSeconds", (arg) => {
    //         console.log(arg);
    //     });

    //     return () => {
    //         socket.off("actualSeconds");
    //     };
    // }, [dispatch]);

    return (
        <div className="w-full h-full bg-neutral-900 flex flex-col">
            <div className="w-full h-8 bg-red-900">
                <h2 className="text-black ">{isConnected}</h2>
            </div>
            <div className="w-full flex-auto bg-blue-900">Content</div>
            <div className="w-full h-10 bg-neutral-900">
                <input className="h-full w-9/12 bg-transparent border-r-2 border-white outline-none text-ms px-2" />
                <button className="w-3/12 bg-red-300 h-full">Send</button>
            </div>
        </div>
    );
}

export default ConsolePanel;
