import * as React from 'react';
import {Map, View} from 'ol';
import {Coordinate} from 'ol/coordinate'
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const initialZoom = 5;

export class AdminMap extends React.Component<{}> {
    mapref = React.createRef<HTMLDivElement>();
    
    view = new View({
        zoom: initialZoom,
    });

    map = new Map({
        layers: [
            new TileLayer({
                source: new XYZ({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                })
            })
        ],
        view: this.view,
    });

    constructor(props: {}) {
        super(props);
    }

    componentDidMount() {
        if (this.mapref != null) {            
            const successCallback: PositionCallback = (position) => {
                const center: Coordinate = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];
                this.view.setCenter(center); // I can't get this working, yet
            };

            navigator.geolocation.getCurrentPosition(successCallback);

            this.map.setTarget(this.mapref.current as HTMLElement);
        }
    }

    render() {
        return (
            <div ref={this.mapref}></div>
        );
    }
}
