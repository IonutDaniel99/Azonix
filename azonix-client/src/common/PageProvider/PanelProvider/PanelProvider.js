import React, { useRef } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout"
import { SCREEN_MAPPER } from './screenMapper'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class PanelProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        };
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    static defaultProps = {
        onLayoutChange: function () { },
    };

    state = {
        currentBreakpoint: "lg",
        mounted: true,
    };

    componentDidMount() {
        this.setState({ mounted: true });
    }

    onBreakpointChange(breakpoint, cols) {
        this.setState({
            currentBreakpoint: breakpoint,
            cols: cols
        });
    }

    onRemoveItem(i) {
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    onDrop = (layout, layoutItem, _event) => {
        const cardData = _event.dataTransfer.getData('text/plain')
        const screen = SCREEN_MAPPER[cardData]
        this.setState({
            items: this.state.items.concat({
                i: screen.id + Math.random(),
                x: layoutItem.x,
                y: layoutItem.y,
                w: 6,
                h: 2,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent,
                static: true,
            }),
        });
    };

    createElement(el) {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };
        return (
            <div key={el.i} data-grid={el}>
                <span className="text">
                    <span className="react-grid-dragHandleExample" onMouseEnter={() => {
                        el.static = false
                        console.log(el.static)
                    }}>[DRAG HERE]</span>
                </span>
                <span
                    className="remove"
                    style={removeStyle}
                    onClick={this.onRemoveItem.bind(this, el.i)}
                >
                    x
                </span>
                {el.panelComponent}

            </div>
        );
    }


    render() {
        return (
            <div
                className="w-auto h-full ml-20 overflow-x-hidden overflow-y-auto bg-red-400"
            >
                <ResponsiveReactGridLayout
                    {...this.props}
                    rowHeight={200}
                    width={200}
                    layouts={{}}
                    onBreakpointChange={this.onBreakpointChange}
                    onDrop={this.onDrop}
                    measureBeforeMount={false}
                    useCSSTransforms={this.state.mounted}
                    preventCollision={!this.state.compactType}
                    isDroppable={true}
                    compactType={'horizontal'}

                >
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div >

        )
    }
}