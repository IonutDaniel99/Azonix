import React from "react";

function ServiceCard({ instances = 0, name, panelType, icon }) {
    const checkIfConsole = panelType === "CONSOLE_PANEL";
    const enable = `bg-slate-700`;
    const disable = `bg-neutral-800`;

    const checkConditions = () => {
        return checkIfConsole || instances === 1;
    };

    return (
        <div
            // className={instances === 0 && !checkIfConsole ? enable : disable}
            className={`h-20 w-20 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center flex-col ${
                checkConditions() ? disable : enable
            }`}
            draggable={instances === 0 && !checkIfConsole ? true : false}
            unselectable="on"
            onDragStart={(e) => e.dataTransfer.setData("text/plain", panelType)}
        >
            {icon}
            <h2 className="truncate">{name}</h2>
        </div>
    );
}

export default ServiceCard;
