import React from "react";
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
        className: "layout",
        rowHeight: 130,
        onLayoutChange: function () { },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    };

    state = {
        currentBreakpoint: "lg",
        compactType: 'vertical',
        mounted: false,
        layouts: {}
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
        console.log("removing", i);
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    onDrop = (layout, layoutItem, _event) => {
        const cardData = _event.dataTransfer.getData('text/plain')
        const screen = SCREEN_MAPPER[cardData]
        this.setState({
            items: this.state.items.concat({
                i: screen.id + Math.random(),
                x: (this.state.items.length * 4),
                y: 0,
                w: 4,
                h: 2,
                panelName: screen.panelName,
                panelComponent: screen.panelComponent
            }),
        });
    };

    createElement(el) {
        console.log(el)
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };
        return (
            <div key={el.i} data-grid={el}>
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
                className="h-full ml-20 overflow-hidden bg-red-400"
            >
                <ResponsiveReactGridLayout
                    {...this.props}
                    isBounded={true}
                    layouts={this.state.layouts}
                    onBreakpointChange={this.onBreakpointChange}
                    onDrop={this.onDrop}
                    measureBeforeMount={false}
                    useCSSTransforms={this.state.mounted}
                    compactType={this.state.compactType}
                    preventCollision={!this.state.compactType}
                    isDroppable={true}
                >
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div>

        )
    }
}