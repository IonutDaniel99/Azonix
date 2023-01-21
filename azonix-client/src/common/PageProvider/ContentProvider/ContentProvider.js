import React from "react";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Springboard from "../Springboard/Springboard";
import PanelProvider from "../PanelProvider/PanelProvider";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
function ContentProvider() {
    return (
        <div className="h-[calc(100%-56px)] min-w-[calc(100%-80px)] relative flex">
            <DndContext>
                <DndProvider backend={HTML5Backend}>
                    <Springboard />
                    <div className="w-full h-full">
                        <PanelProvider />
                    </div>
                </DndProvider>
                <div className="min-w-[380px]">
                    <ConsolePanel />
                </div>
            </DndContext>
        </div>
    );
}

export default ContentProvider;
