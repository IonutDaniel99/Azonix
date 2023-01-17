import React from "react";
function ContentProvider({ children }) {
    return (
        <div className="h-[calc(100%-56px)] min-w-[calc(100%-80px)] relative">
            {children}
        </div>
    );
}

export default ContentProvider;
