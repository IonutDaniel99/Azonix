/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React, { useState } from "react";
import _, { uniqueId } from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SCREEN_MAPPER } from "./screenMapper";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { IoMdClose } from "react-icons/io";
import { BiCog, BiMove } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import { Dropdown } from "antd";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function PanelProvider() {
    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
    const [cols, setCols] = useState({ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 });
    const [items, setItems] = useState([]);
    const [layout, setLayout] = useState([]);

    const [panelSettings, setPanelSettings] = useState({
        location: [
            {
                label: (
                    <span onClick={(e) => console.log("kakutza")}>kata</span>
                ),
                key: 0,
                name: "tldddddddddd",
            },
            {
                label: "t",
                key: 2,
                name: "t",
            },
        ],
    });

    const onBreakpointChange = (breakpoint) => {
        setCurrentBreakpoint(breakpoint);
    };

    const onRemoveItem = (i) => {
        setItems(_.reject(items, { i: i }));
    };

    const onDrop = (layout, layoutItem, _event) => {
        const cardData = _event.dataTransfer.getData("text/plain");
        const screen = SCREEN_MAPPER[cardData];
        const { x, y, w, h } = calculateLogic();
        setItems(
            items.concat({
                i: uniqueId(),
                x: x,
                y: y,
                w: w,
                h: h,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent,
                static: false,
                // resizeHandles: availableHandles,
            })
        );
        renderDom();
    };

    const onResizeFunc = (curr, all) => {
        console.log(curr);
        setLayout(curr);
    };

    const calculateLogic = () => {
        var x = 0;
        var y = 0;
        var w = 4;
        var h = 3;
        if (items.length === 0) return { x, y, w, h };
        switch (currentBreakpoint) {
            case "lg":
                break;
            default:
                break;
        }
        return { x, y, w, h };
    };

    const createElement = (el) => {
        return (
            <div key={el.i} data-grid={el} className={"z-[60]"}>
                <div className="h-8 w-full bg-darkBlue flex items-center justify-between pt-[2px]">
                    <div className="h-7 flex items-center w-2/6 dragMe cursor-grab active:cursor-grabbing bg-blue-900">
                        <span className="react-grid-dragHandleExample text-white flex items-center justify-between w-full pr-2">
                            <span className="px-4">{el.panelName}</span>
                            <BsArrowsMove />
                        </span>
                    </div>
                    <span className="flex gap-3 pr-3">
                        <span className="text-white cursor-pointer">
                            <Dropdown
                                trigger={["click"]}
                                menu={{ items: panelSettings.location }}
                            >
                                <BiCog onClick={(e) => e.preventDefault()} />
                            </Dropdown>
                        </span>
                        <span
                            className="remove text-white cursor-pointer"
                            onClick={onRemoveItem.bind(this, el.i)}
                        >
                            <IoMdClose />
                        </span>
                    </span>
                </div>
                <div className={" h-[calc(100%-28px)]"}>
                    {el.panelComponent}
                </div>
            </div>
        );
    };

    const renderDom = () => {
        return _.map(items, (el) => createElement(el));
    };
    return (
        <div className="h-full w-full overflow-hidden flex justify-between">
            <div className="w-full h-full ml-20 overflow-x-hidden overflow-y-auto  border-l-2 border-r-2 border-slate-800">
                <ResponsiveReactGridLayout
                    className="z-50 layout"
                    breakpoint={currentBreakpoint}
                    maxRows={6}
                    cols={cols}
                    layout={layout}
                    autoSize={true}
                    onDrop={(layout, item, e) => onDrop(layout, item, e)}
                    // onResize={() => onResizeFunc()}
                    measureBeforeMount={false}
                    useCSSTransforms={true}
                    preventCollision={false}
                    onBreakpointChange={() => onBreakpointChange()}
                    isDroppable={true}
                    compactType={"horizontal"}
                    draggableHandle={".dragMe"}
                    verticalCompact={true}
                    onLayoutChange={(curr, all) => onResizeFunc(curr, all)}
                    containerPadding={items.length === 0 ? [30, 30] : [0, 0]}
                    margin={items.length === 0 ? [30, 30] : [0, 0]}
                >
                    {renderDom()}
                </ResponsiveReactGridLayout>
                <div className="panelProvider -z-50">
                    {_.map(Array(20), (i, index) => (
                        <span
                            key={index}
                            className={`meteor-${index + 1}`}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="min-w-[380px]">
                <ConsolePanel />
            </div>
        </div>
    );
}

export default PanelProvider;
