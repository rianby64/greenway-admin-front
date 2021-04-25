import * as React from 'react';
import {Map, View, MapBrowserEvent, Feature} from 'ol';
import {Point} from 'ol/geom';
import {Coordinate} from 'ol/coordinate'
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';

const initialZoom = 9;

export class AdminMap extends React.Component<{}> {
    mapref = React.createRef<HTMLDivElement>();
    
    view = new View({
        zoom: initialZoom,
    });

    pointsLayer = new VectorSource()

    map = new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
            new VectorLayer({
                source: this.pointsLayer,
            })
        ],
        view: this.view,
    });

    constructor(props: {}) {
        super(props);
    }

    addNewPoint = (e: MapBrowserEvent<UIEvent>) => {
        const newPoint = new Feature(new Point(e.coordinate));
        newPoint.setStyle(new Style({
            image: new RegularShape({
                fill: new Fill({color: 'red'}),
                stroke: new Stroke({color: 'black', width: 2}),
                radius: 10 / Math.SQRT2,
                radius2: 10,
                points: 4,
                angle: 0,
            }),
          
        }))
        this.pointsLayer.addFeature(newPoint);
    }

    componentWillUnmount() {
        this.map.un('click', this.addNewPoint);
    }

    componentDidMount() {
        if (this.mapref != null) {            
            const successCallback: PositionCallback = (position) => {
                const center: Coordinate = [
                    position.coords.longitude,
                    position.coords.latitude,
                ];
                
                this.view.setCenter(fromLonLat(center));
            };

            navigator.geolocation.getCurrentPosition(successCallback);

            this.map.setTarget(this.mapref.current as HTMLElement);

            this.map.on('click', this.addNewPoint);
        }
    }

    render() {
        return (
            <div ref={this.mapref}></div>
        );
    }
}
