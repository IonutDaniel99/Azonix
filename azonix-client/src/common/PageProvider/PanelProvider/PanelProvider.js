/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-direct-mutation-state */
import React, { createRef } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { SCREEN_MAPPER } from "./screenMapper";
import ConsolePanel from "../../../panels/Console/ConsolePanel";
import { When } from "react-if";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class PanelProvider extends React.Component {
    state = {
        currentBreakpoint: "lg",
        mounted: true,
        layout: [],
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    };

    onBreakpointChange = (breakpoint) => {
        console.log(breakpoint);
        console.log(this.state.layout);
        this.setState({
            currentBreakpoint: breakpoint,
        });
    };

    onRemoveItem(i) {
        this.setState({ layout: _.reject(this.state.layout, { i: i }) });
    }

    onDrop = (layout, layoutItem, _event) => {
        console.log(layoutItem);
        const availableHandles = ["s", "w", "e", "n"];
        const cardData = _event.dataTransfer.getData("text/plain");
        const screen = SCREEN_MAPPER[cardData];
        const { x, y, w, h } = this.calculateLogic();
        this.setState({
            layout: this.state.layout.concat({
                i: screen.id + Math.random(),
                x: x,
                y: y,
                w: w,
                h: h,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent,
                static: false,
                resizeHandles: availableHandles,
            }),
        });
        this.renderDom();
    };

    calculateLogic = () => {
        var x = 0;
        var y = 0;
        var w = 4;
        var h = 2.8;
        switch (this.state.currentBreakpoint) {
            case "lg":
                const getCurrentBreakpoint =
                    this.state.cols[this.state.currentBreakpoint];
                if (this.state.layout.length === 6) {
                    x = 0;
                    y = 0;
                    w = 4;
                    h = 3;
                }
                break;
            default:
                break;
        }

        return { x, y, w, h };
    };

    createElement(el) {
        return (
            <div key={el.i} data-grid={el} className={"z-[60]"}>
                <div
                    style={{
                        height: 28,
                        width: "100%",
                        background: "#000",
                    }}
                >
                    <span className="text">
                        <span className="react-grid-dragHandleExample text-white">
                            [DRAG HERE]
                        </span>
                    </span>
                    <span
                        className="remove text-white"
                        style={{
                            position: "absolute",
                            right: "2px",
                            top: 0,
                            cursor: "pointer",
                        }}
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
        console.log(this.state.layout);
        return _.map(this.state.layout, (el) => this.createElement(el));
    }

    render() {
        return (
            <div className="h-full w-full overflow-hidden flex justify-between">
                <div className="w-3/4 h-full ml-20 overflow-x-hidden overflow-y-auto">
                    <ResponsiveReactGridLayout
                        className="z-50"
                        {...this.props}
                        layouts={this.state.layout}
                        autoSize={true}
                        onDrop={this.onDrop}
                        measureBeforeMount={false}
                        useCSSTransforms={this.state.mounted}
                        preventCollision={!this.state.compactType}
                        onBreakpointChange={this.onBreakpointChange}
                        isDroppable={true}
                        compactType={"horizontal"}
                        onLayoutChange={this.onLayoutChange}
                        containerPadding={
                            this.state.layout.length === 0 ? [30, 30] : [0, 0]
                        }
                        margin={
                            this.state.layout.length === 0 ? [30, 30] : [0, 0]
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
                <div className=" w-1/4 border-l-4 border-slate-800">
                    <ConsolePanel />
                </div>
            </div>
        );
    }
}
