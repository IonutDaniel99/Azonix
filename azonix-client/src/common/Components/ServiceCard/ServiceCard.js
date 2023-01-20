import React from "react";

function ServiceCard({ instances = 0, name, panelType, icon }) {
    const enable = `bg-slate-800`;
    const disable = `bg-neutral-800`;

    const panelNumber = instances === 7;

    return (
        <div
            className={`h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col ${
                panelNumber ? disable : enable
            } hover:bg-[#202327] hover:cursor-pointer active:cursor-grabbing group`}
            draggable={panelNumber ? false : true}
            unselectable="on"
            onDragStart={(e) => e.dataTransfer.setData("text/plain", panelType)}
        >
            {icon}
            <span className="truncate text-[#9299a1] text-sm pt-1 group-hover:text-white">
                {name}
            </span>
        </div>
    );
}

export default ServiceCard;
