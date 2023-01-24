import React from "react";
function ContentProvider({ children }) {
    return <div className="h-full w-full flex overflow-hidden">{children}</div>;
}

export default ContentProvider;
