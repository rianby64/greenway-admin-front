import * as React from 'react';
import {Map, View, MapBrowserEvent, Feature} from 'ol';
import {Point, LineString} from 'ol/geom';
import {Coordinate} from 'ol/coordinate'
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {OSM, Vector as VectorSource} from 'ol/source';
import {fromLonLat} from 'ol/proj';
import {Fill, RegularShape, Stroke, Style} from 'ol/style';
import { useDispatch } from 'react-redux';
import { changeCurrent, changePrev } from '../redux/pointsReducer';
import { useTypesSelector } from '../hooks/useTypesSelector';

const initialZoom = 9;

export const AdminMap: React.FC = () => {
    let counter = 1;
    const dispatch = useDispatch();
    const {currentPoint, prevPoint} = useTypesSelector(store => store.pointsStore)
    const mapRef = React.createRef<HTMLDivElement>();

     const view = new View({
        zoom: initialZoom,
    });

    const pointsLayer = new VectorSource();
    const linesLayer = new VectorSource({
        wrapX: false
    });

     const map = new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
            new VectorLayer({
                source: pointsLayer,
            }),
            new VectorLayer({
                source:  linesLayer,
                style: [
                    new Style({
                        stroke : new Stroke({
                            color: 'red',
                            width: 1
                        })
                    })
                ]
            })
        ],
        view: view,
    });

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
        if( counter === 1) {
            dispatch(changeCurrent(e.coordinate));
            counter = 2;
            console.log(counter);
        }else {
            dispatch(changePrev(e.coordinate));
            counter = 1;
            console.log(counter);
        }
        addNewVector()
    };

    const addNewVector = () => {
        if (prevPoint != currentPoint && prevPoint != [0] && currentPoint != [0]) {
        const line = new Feature(new LineString([prevPoint, currentPoint]));
        const point1 = new Feature(new Point(prevPoint));
        const point2 = new Feature(new Point(currentPoint));
        console.log(point1);
        console.log(point2);
        linesLayer.addFeatures([point1, point2, line])
    }};

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

            map.setTarget(mapRef.current as HTMLElement);

            map.on('click',addNewPoint);
        }
    },[]);

    return (
        <div ref={mapRef}></div>
    );
}