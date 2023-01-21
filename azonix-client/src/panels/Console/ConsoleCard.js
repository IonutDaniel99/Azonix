import React, { useEffect } from "react";
import io from "socket.io-client";
import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";
import { useDispatch } from "react-redux";
import { setConnected, setDisconnected } from "./actions/consoleAction";
import { FALSE_STRING, TRUE_STRING } from "../../utils/constants";
import { BsTerminal } from "react-icons/bs";

const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsoleCard() {
    const dispatch = useDispatch();
    useEffect(() => {
        socket.on("connect", () => {
            dispatch(setConnected(TRUE_STRING));
        });

        socket.on("disconnect", () => {
            dispatch(setDisconnected(FALSE_STRING));
        });
        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, [dispatch]);

    return (
        <div
            className={`pointer-events-none h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col bg-neutral-800 hover:bg-[#202327] hover:cursor-pointer active:cursor-grab group`}
            draggable={false}
            unselectable="on"
            onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", "CONSOLE_PANEL")
            }
        >
            <BsTerminal size={24} />
            <span className="pointer-events-none truncate text-[#9299a1] text-sm pt-1 group-hover:text-white">
                Console
            </span>
        </div>
    );
}

export default ConsoleCard;
