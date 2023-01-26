import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";
import { WEATHER_SOCKET_IO_ADDRESS } from "../Weather/weather_config";
import InfoLine from "./components/InfoLine";

const socket_console = io(CONSOLE_SOCKET_IO_ADDRESS);
const weather_console = io(WEATHER_SOCKET_IO_ADDRESS);

function ConsolePanel() {
    const dispatch = useDispatch();

    const [consoleStatus, setConsoleStatus] = useState([])

    const [infoBadgeOn, setInfoBadgeOn] = useState(false);
    const [updateBadgeOn, setUpdateBadgeOn] = useState(false);
    const [warningBadgeOn, setWarningBadgeOn] = useState(false);
    const [errorBadgeOn, setErrorBadgeOn] = useState(false);

    const isConnected = useSelector(
        (state) => state.consoleReducer.isConnected
    );
    useEffect(() => {
        socket_console.on("consoleStatusUpdate", (obj) => {
            setConsoleStatus([...consoleStatus, obj])
        });
        weather_console.on("weatherStatusUpdate", (obj) => {
            setConsoleStatus([...consoleStatus, obj])
        });

        console.log(consoleStatus)
        return () => {
            socket_console.off("consoleStatusUpdate");
            weather_console.off("weatherStatusUpdate");
        };
    }, [consoleStatus]);


    const consoleContent = useMemo(() => {
        return consoleStatus
            .map(x => {
                return <InfoLine data={x} />
            })
    }, [consoleStatus])


    return (
        <div className="flex flex-col min-w-[400px] h-full bg-neutral-900">
            <div className="w-full h-10 gap-4 flex items-center pl-2 border-b-[1px] border-yellow-800">
                <span
                    style={{
                        border: infoBadgeOn ? "1px" : "0px",
                        backgroundColor: infoBadgeOn
                            ? "rgb(37 99 235)"
                            : "rgb(31 41 55)",
                    }}
                    onClick={() => setInfoBadgeOn(!infoBadgeOn)}
                    className="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold  text-white rounded-full cursor-pointer"
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
                    className="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
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
                    className="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
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
                    className="text-xs inline-block py-[6px] px-3 leading-none text-center whitespace-nowrap align-middle font-bold text-white rounded-full cursor-pointer"
                >
                    Error
                </span>
            </div>
            <div className="flex-auto w-full bg-gray-900">{consoleContent}</div>
            <div className="w-full h-10 bg-neutral-900">
                <input className="w-9/12 h-full px-2 bg-transparent border-r-2 border-white outline-none text-ms" />
                <button className="w-3/12 h-full bg-red-300">Send</button>
            </div>
        </div>
    );
}

export default ConsolePanel;
