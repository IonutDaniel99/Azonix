import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";

// const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsolePanel() {
    // const dispatch = useDispatch();

    const [infoBadgeOn, setInfoBadgeOn] = useState(false);
    const [updateBadgeOn, setUpdateBadgeOn] = useState(false);
    const [warningBadgeOn, setWarningBadgeOn] = useState(false);
    const [errorBadgeOn, setErrorBadgeOn] = useState(false);

    const isConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );
    console.log(isConnected);
    // useEffect(() => {
    //     socket.on("actualSeconds", (arg) => {
    //         console.log(arg);
    //     });

    //     return () => {
    //         socket.off("actualSeconds");
    //     };
    // }, [dispatch]);

    return (
        <div className="w-3/12 h-full bg-neutral-900 flex flex-col">
            <div className="w-full h-10 gap-4 flex items-center pl-2 border-b-[1px] border-yellow-800">
                <span
                    style={{
                        border: infoBadgeOn ? "1px" : "0px",
                        backgroundColor: infoBadgeOn
                            ? "rgb(37 99 235)"
                            : "rgb(31 41 55)",
                    }}
                    onClick={() => setInfoBadgeOn(!infoBadgeOn)}
                    class="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold  text-white rounded-full cursor-pointer"
                >
                    Info
                </span>
                <span
                    style={{
                        border: updateBadgeOn ? "1px" : "0px",
                        backgroundColor: updateBadgeOn
                            ? "rgb(34 197 94)"
                            : "rgb(31 41 55)",
                    }}
                    onClick={() => setUpdateBadgeOn(!updateBadgeOn)}
                    class="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
                >
                    Update
                </span>
                <span
                    style={{
                        border: warningBadgeOn ? "1px" : "0px",
                        backgroundColor: warningBadgeOn
                            ? "rgb(234 179 8)"
                            : "rgb(31 41 55)",
                    }}
                    onClick={() => setWarningBadgeOn(!warningBadgeOn)}
                    class="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
                >
                    Warning
                </span>
                <span
                    style={{
                        border: errorBadgeOn ? "1px" : "0px",
                        backgroundColor: errorBadgeOn
                            ? "rgb(220 38 38)"
                            : "rgb(31 41 55)",
                    }}
                    onClick={() => setErrorBadgeOn(!errorBadgeOn)}
                    class="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
                >
                    Error
                </span>
            </div>
            <div className="w-full flex-auto bg-gray-900">Content</div>
            <div className="w-full h-10 bg-neutral-900">
                <input className="h-full w-9/12 bg-transparent border-r-2 border-white outline-none text-ms px-2" />
                <button className="w-3/12 bg-red-300 h-full">Send</button>
            </div>
        </div>
    );
}

export default ConsolePanel;
