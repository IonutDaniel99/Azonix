import React from "react";
import { useSelector } from "react-redux";
function ScreenFooter() {
    const isFooterVisible = useSelector(
        (state) => state.headerReducer.isFooterVisible
    );

    return (
        <div
            style={{ visibility: isFooterVisible ? "visible" : "hidden" }}
            className="bg-darkBlue h-7 border-t-2 border-slate-800 absolute z-[110] bottom-0 w-full"
        >
            <h2>ScreenFooter</h2>
        </div>
    );
}

export default ScreenFooter;
