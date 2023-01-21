/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from "react";
import _ from "lodash";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { useDroppable } from "@dnd-kit/core";
import ReactGridLayout, { WidthProvider } from "react-grid-layout";
import { useDrop } from "react-dnd";

const ReactGridLayoutComponent = WidthProvider(ReactGridLayout);

function PageProvider(props) {
    const [items, setItems] = useState({});
    const [layout, setLayout] = useState([
        { i: 1, x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1 }, // *** -- minH & maxH doesnt effect the grid items
        { i: 2, x: 2, y: 0, w: 1, h: 1, minH: 1, maxH: 1 },
        // {i: '3', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1},
        // {i: '4', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1}
    ]);
    const [resizeplotly, setResizePlotly] = useState(false);
    const onLayoutChange = (layout) => {
        setLayout(layout);
    };

    const onResize = (layouts) => {
        console.log(layouts);
        setLayout(layouts);
    };

    const [{ isOver }, drop] = useDrop({
        accept: "BOX",
        drop: (item, monitor) => {
            setItems({ item, ...items });
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });
    return (
        <div>
            <div ref={drop} style={{ maxWidth: "100%", height: "auto" }}>
                <ReactGridLayout
                    compactType={"horizontal"}
                    // rowHeight= {200}
                    cols={4}
                    onResize={onResize}
                    width={100}
                    layout={layout}
                    onLayoutChange={onLayoutChange}
                    // draggableHandle=".MyDragHandleClassName"
                    draggableCancel=".MyDragCancel"
                    isBounded={true}
                >
                    {Object.entries(items).map((item) => console.log(item))}
                    {/* {items.map((ele, index) => {
                        console.log(index);
                        return <div key={index + 1}>{index}</div>;
                    })} */}
                </ReactGridLayout>
            </div>
        </div>
    );
}

export default PageProvider;
