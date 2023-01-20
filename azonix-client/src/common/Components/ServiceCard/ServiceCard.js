import React from "react";

function ServiceCard({ instances = 0, name, panelType, icon }) {
    const checkIfConsole = panelType === "CONSOLE_PANEL";
    const enable = `bg-slate-800`;
    const disable = `bg-neutral-800`;

    const checkConditions = () => {
        return instances === 1;
    };

    return (
        <div
            // className={instances === 0 && !checkIfConsole ? enable : disable}
            className={`h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col ${
                checkConditions() ? disable : enable
            } hover:bg-[#202327] hover:cursor-pointer active:cursor-grab group`}
            draggable={instances === 0 && !checkIfConsole ? true : false}
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
