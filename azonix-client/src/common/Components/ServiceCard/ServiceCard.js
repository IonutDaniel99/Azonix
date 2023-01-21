import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { uniqueId } from "lodash";
import React from "react";

function ServiceCard({ instances = 0, name, panelType, icon }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: name,
        data: {
            panelType: panelType,
        },
    });
    const style = transform
        ? {
              transform: CSS.Translate.toString(transform),
          }
        : undefined;

    const enable = `bg-slate-800`;
    const disable = `bg-neutral-800`;

    const panelNumber = instances === 7;

    return (
        <div
            className={`h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col ${
                panelNumber ? disable : enable
            } hover:bg-[#202327] hover:cursor-pointer active:cursor-grabbing group`}
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            {icon}
            <span className="truncate text-[#9299a1] text-sm pt-1 group-hover:text-white">
                {name}
            </span>
        </div>
    );
}

export default ServiceCard;
