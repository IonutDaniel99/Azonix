/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import _, { uniqueId } from "lodash";
import { SCREEN_MAPPER } from "./screenMapper";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { useDroppable } from "@dnd-kit/core";

function PageProvider(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: "droppable",
    });
    console.log({ isOver, setNodeRef });
    const style = {
        color: isOver ? "green" : undefined,
    };
    return (
        <div className="h-full w-full overflow-hidden flex justify-between">
            <div className="w-full h-full ml-20 overflow-x-hidden overflow-y-auto  border-l-2 border-r-2 border-slate-800">
                <div ref={setNodeRef} style={style}>
                    {props.children}
                </div>
                <div className="panelProvider -z-50">
                    {_.map(Array(20), (i, index) => (
                        <span
                            key={index}
                            className={`meteor-${index + 1}`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="min-w-[380px]">
                <ConsolePanel />
            </div>
        </div>
    );
}

export default PageProvider;
