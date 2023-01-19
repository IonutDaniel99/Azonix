import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { When } from "react-if";
import { CONSOLE_SOCKET_IO_ADDRESS } from "./console_config";
import { useDispatch } from "react-redux";
import {
    setConnected,
    setDisconnected,
    setSinceOff,
} from "./actions/consoleAction";
import { FALSE_STRING, TRUE_STRING } from "../../utils/constants";
import ServiceCard from "../../common/Components/ServiceCard/ServiceCard";
import { BsTerminal } from "react-icons/bs";

const socket = io(CONSOLE_SOCKET_IO_ADDRESS);

function ConsoleCard() {
    const [showConsole, setShowConsole] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const timerAgoInterval = setInterval(
            () => dispatch(setSinceOff(1)),
            1000
        );

        socket.on("connect", () => {
            dispatch(setConnected(TRUE_STRING));
            clearInterval(timerAgoInterval);
            setShowConsole(true);
        });

        socket.on("disconnect", () => {
            dispatch(setDisconnected(FALSE_STRING));
            timerAgoInterval();
            setShowConsole(false);
        });
        return () => {
            socket.off("connect");
            socket.off("disconnect");
        };
    }, [dispatch]);

    return (
        <When condition={showConsole}>
            <ServiceCard
                name={"Console"}
                panelType={"CONSOLE_PANEL"}
                icon={<BsTerminal size={24} />}
            />
        </When>
    );
}

export default ConsoleCard;
