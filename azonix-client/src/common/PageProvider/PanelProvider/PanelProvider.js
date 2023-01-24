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
        const uniqId = Math.floor((screen.id + uniqueId()) * Math.random())
        setItems(
            (prevState) => ({
                ...prevState,
                [uniqId]: {
                    i: uniqId,
                    x: layoutItem.x,
                    y: layoutItem.y,
                    w: w,
                    h: h,
                    panelName: screen.panelName,
                    panelComponent: screen.panelComponent,
                    static: false,
                    // resizeHandles: availableHandles,
                }
            })
        );
        renderDom();
    };

    const onResizeFunc = (curr, all) => { };

    const calculateLogic = () => {
        var w = 4;
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
        console.log(layout)
        const item = _.find(layout, { i: id });
        const index = item.i
        console.log({ layout, item, index })
        const mod_item = { ...item, x: x, y: y, w: w, h: h }
        setLayout({
            ...layout,
            [index]: mod_item
        })
        console.log('layout', layout);
    };

    const createElement = (el) => {
        return (
            <div key={el.i} data-grid={el} className={"z-[60]"}>
                <div className="h-8 w-full bg-darkBlue flex items-center justify-between pt-[2px]">
                    <div className="flex items-center w-2/6 bg-blue-900 h-7 dragMe cursor-grab active:cursor-grabbing">
                        <span className="flex items-center justify-between w-full pr-2 text-white react-grid-dragHandleExample">
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
                            className="text-white cursor-pointer remove"
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
        <div className="flex justify-between w-full h-full overflow-hidden">
            <div className="w-full h-full pr-[1px] ml-20 overflow-x-hidden overflow-y-auto border-l-2 border-r-2 border-slate-800 layout-container-scrollbar">
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
