import { uniqueId } from "lodash";
import React from "react";
import { useDrag } from "react-dnd";
import { SCREEN_MAPPER } from "./screenMapper";

function ServiceCard({ instances = 0, name, panelType, icon }) {
    const { panelName, panelComponent } = SCREEN_MAPPER[panelType];
    const [{ isDragging }, drag] = useDrag({
        type: "BOX",
        item: {
            id: uniqueId(),
            panelName: panelName,
            panelComponent: panelComponent,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    const enable = `bg-slate-800`;
    const disable = `bg-neutral-800`;

    const panelNumber = instances === 7;

    return (
        <div
            className={`h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col ${
                panelNumber ? disable : enable
            } hover:bg-[#202327] hover:cursor-pointer active:cursor-grabbing group`}
            ref={drag}
        >
            {icon}
            <span className="truncate text-[#9299a1] text-sm pt-1 group-hover:text-white">
                {name}
            </span>
        </div>
    );
}

export default ServiceCard;
