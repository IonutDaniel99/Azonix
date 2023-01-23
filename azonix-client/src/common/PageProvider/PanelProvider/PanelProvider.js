/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React, { useEffect, useState } from "react";
import _, { get, set, uniqueId } from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SCREEN_MAPPER } from "./screenMapper";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { IoMdClose } from "react-icons/io";
import { BiCog, BiMove } from "react-icons/bi";
import { BsArrowsMove } from "react-icons/bs";
import { Dropdown } from "antd";
import * as RxIcon from "react-icons/rx";

import { getObjectByChildrensValue } from "../../../utils/helpers";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function PanelProvider() {
    const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
    const [cols, setCols] = useState({ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 });
    const [items, setItems] = useState([]);
    const [layout, setLayout] = useState([]);

    const [panelSettings] = useState({
        location: [
            {
                label: (
                    <span className="flex items-center justify-between w-28">
                        <RxIcon.RxArrowUp />
                        <p>Top</p>
                    </span>
                ),
                key: 1,
                title: "Top",
            },
            {
                label: (
                    <span className="flex items-center justify-between">
                        <RxIcon.RxArrowLeft />
                        <p>Left</p>
                    </span>
                ),
                key: 2,
                title: "Left",
            },
            {
                label: (
                    <span className="flex items-center justify-between">
                        <RxIcon.RxArrowRight />
                        <p>Right</p>
                    </span>
                ),
                key: 3,
                title: "Right",
            },
            {
                label: (
                    <span className="flex items-center justify-between">
                        <RxIcon.RxArrowTopLeft />
                        <p>TLeft</p>
                    </span>
                ),
                key: 4,
                title: "TLeft",
            },
            {
                label: (
                    <span className="flex items-center justify-between">
                        <RxIcon.RxArrowTopRight />
                        <p>TRight</p>
                    </span>
                ),
                key: 5,
                title: "TRight",
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
        const { w, h } = calculateLogic();
        setItems(
            items.concat({
                i: screen.id + uniqueId(),
                x: layoutItem.x,
                y: layoutItem.y,
                w: 12,
                h: 3,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent,
                static: false,
                // resizeHandles: availableHandles,
            })
        );
        renderDom();
    };

    const onResizeFunc = (curr, all) => {};

    const calculateLogic = () => {
        var w = 12;
        var h = 3;
        if (items.length < 2) return { w, h };
        switch (currentBreakpoint) {
            case "lg":
                break;
            default:
                break;
        }
        return { w, h };
    };

    const resizePanelContainer = (location, id) => {
        var x,
            y,
            w,
            h = 0;
        switch (location) {
            case "TRight":
                x = 12 - 3;
                y = 6 - 3;
                w = 4;
                h = 3;
                break;

            default:
                break;
        }
        const item = _.find(items, { i: id });
        const index = _.findIndex(items, (it) => {
            return it.i === item.i;
        });
        // setItems([...items, { ...item, x: x, y: y, w: w, h: h }]);
        // console.log(items, "d");
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
                                menu={{
                                    items: panelSettings.location,
                                    onClick: ({ item }) => {
                                        resizePanelContainer(
                                            item.props.title,
                                            el.i
                                        );
                                    },
                                }}
                                key={el.i}
                            >
                                <BiCog />
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
                    onResize={() => onResizeFunc()}
                    measureBeforeMount={false}
                    useCSSTransforms={true}
                    preventCollision={false}
                    onBreakpointChange={() => onBreakpointChange()}
                    isDroppable={true}
                    // compactType={"horizontal"}
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
