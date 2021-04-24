import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as React from 'react';

export class MyExampleOL extends React.Component<{}> {
    myref = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);

    }

    componentDidMount() {
        if (this.myref != null) {
            new Map({
                target: this.myref.current as HTMLElement,
                layers: [
                new TileLayer({
                    source: new XYZ({
                    url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                })
                ],
                view: new View({
                center: [0, 0],
                zoom: 2
                })
            });
        }
    }

    render() {
        return (
            <div ref={this.myref}></div>
        );
    }
}
