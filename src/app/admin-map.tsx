import * as React from 'react';
import {Map, View, MapBrowserEvent, Feature} from 'ol';
import { Point } from 'ol/geom';
import {Coordinate} from 'ol/coordinate'
import {Modify, Draw, Snap} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import GeometryType from 'ol/geom/GeometryType';

const CONSTANTS = {
    initialZoom: 9,
}

export const AdminMap: React.FC = () => {
    const mapRef = React.createRef<HTMLDivElement>();
    const pointsLayer = new VectorSource();
    const modify = new Modify({
        source: new VectorSource()
    })
    const view = new View({
        zoom: CONSTANTS.initialZoom,
    });
    const vector = new VectorLayer({
        source: pointsLayer,
        style: new Style({
            fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)',  
                }),
                stroke: new Stroke({
                    color: '#ffcc33',
                    width: 2,
                  }),
                  image: new CircleStyle({
                    radius: 7,
                    fill: new Fill({
                      color: '#ffcc33',
                    }),
                  }),
        })
    })

     const map = new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
            vector
        ],
        view: view,
    });

    const addInteractions = (value = GeometryType.LINE_STRING ) => {
        const draw = new Draw({
            source: pointsLayer,
            type: value
        });
        map.addInteraction(draw)
        const snap = new Snap({source: pointsLayer});
        map.addInteraction(snap);
        
    }

    const addNewPoint = (e: MapBrowserEvent<UIEvent>) => {
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
          
        }));
        pointsLayer.addFeature(newPoint);
    };

    React.useEffect(() => {
        if (mapRef != null) {     
            const successCallback: PositionCallback = (position) => {
                const center: Coordinate = [
                    position.coords.longitude,
                    position.coords.latitude,
                ];
                
                view.setCenter(fromLonLat(center));
            };

            navigator.geolocation.getCurrentPosition(successCallback);
            map.addInteraction(modify);
            map.setTarget(mapRef.current as HTMLElement);
            map.on('click',addNewPoint);
            addInteractions()
        }
    },[]);

    return (
        <div ref={mapRef}></div>
    );
}