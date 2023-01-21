/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import _, { uniqueId } from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SCREEN_MAPPER } from "./screenMapper";
import ConsolePanel from "../../../panels/Console/ConsolePanel";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class PanelProvider extends React.Component {
    state = {
        currentBreakpoint: "lg",
        mounted: true,
        layout: [],
        items: [],
        cols: { lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 },
    };

    onBreakpointChange = (breakpoint) => {
        this.setState({
            currentBreakpoint: breakpoint,
        });
    };

    onRemoveItem(i) {
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    onDrop = (layout, layoutItem, _event) => {
        const cardData = _event.dataTransfer.getData("text/plain");
        const screen = SCREEN_MAPPER[cardData];
        const { x, y, w, h } = this.calculateLogic();
        this.setState({
            items: this.state.items.concat({
                i: uniqueId(),
                x: x,
                y: y,
                w: w,
                h: h,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent,
                static: false,
                // resizeHandles: availableHandles,
            }),
        });
        this.renderDom();
    };

    calculateLogic = () => {
        var x = 0;
        var y = 0;
        var w = 4;
        var h = 3;
        console.log(this.state.currentBreakpoint);
        switch (this.state.currentBreakpoint) {
            case "lg":
                var lastItem = this.state.items.at(-1);
                console.log(lastItem);
                if (!lastItem) break;
                x = lastItem.x !== 8 ? 4 + lastItem.x : 0;
                y = lastItem.x === 8 ? 3 + lastItem.y : 0;
                break;
            default:
                break;
        }
        console.log({ x, y, w, h });
        return { x, y, w, h };
    };

    createElement(el) {
        return (
            <div key={el.i} data-grid={el} className={"z-[60] p-2"}>
                <div className="h-7 w-full bg-[#202327] flex justify-between px-4 dragMe cursor-grab active:cursor-grabbing ">
                    <span className="react-grid-dragHandleExample text-white">
                        {el.panelName}
                    </span>
                    <span
                        className="remove text-white cursor-pointer"
                        onClick={this.onRemoveItem.bind(this, el.i)}
                    >
                        x
                    </span>
                </div>
                <div style={{ height: "calc(100% - 28px)" }}>
                    {el.panelComponent}
                </div>
            </div>
        );
    }

    renderDom() {
        return _.map(this.state.items, (el) => this.createElement(el));
    }
    render() {
        return (
            <div className="h-full w-full overflow-hidden flex justify-between">
                <div className="w-full h-full ml-20 overflow-x-hidden overflow-y-auto  border-l-2 border-r-2 border-slate-800">
                    <ResponsiveReactGridLayout
                        className="z-50 layout"
                        {...this.props}
                        layout={this.state.layout}
                        autoSize={true}
                        onDrop={this.onDrop}
                        onResize={this.onResizeFunc}
                        measureBeforeMount={false}
                        useCSSTransforms={this.state.mounted}
                        preventCollision={false}
                        onBreakpointChange={this.onBreakpointChange}
                        isDroppable={true}
                        compactType={"horizontal"}
                        draggableHandle={".dragMe"}
                        verticalCompact={true}
                        // onLayoutChange={this.onLayoutChange}
                        containerPadding={
                            this.state.items.length === 0 ? [30, 30] : [0, 0]
                        }
                        margin={
                            this.state.items.length === 0 ? [30, 30] : [0, 0]
                        }
                    >
                        {this.renderDom()}
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
}
