import PanelProvider from "./common/PageProvider/PanelProvider/PanelProvider";
import ContentProvider from "./common/PageProvider/ContentProvider/ContentProvider";
import ScreenFooter from "./common/PageProvider/ScreenFooter/ScreenFooter";
import ScreenHeader from "./common/PageProvider/ScreenHeader/ScreenHeader";
import Springboard from "./common/PageProvider/Springboard/Springboard";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";

function App() {
    const [isDropped, setIsDropped] = useState(false);

    return (
        <div className="h-screen w-screen">
            <ScreenHeader />
            <ContentProvider>
                <DndContext>
                    <Springboard />
                    <PanelProvider />
                </DndContext>
            </ContentProvider>
            <ScreenFooter />
        </div>
    );
}

export default App;
