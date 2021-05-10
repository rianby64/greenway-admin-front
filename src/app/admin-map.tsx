import * as React from 'react';
import { Map, MapBrowserEvent, View } from 'ol';
import { Geometry } from 'ol/geom';
import { Coordinate } from 'ol/coordinate'
import { Modify, Draw, Select, Translate } from 'ol/interaction';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Fill, Stroke, Style } from 'ol/style';
import CircleStyle from 'ol/style/Circle';
import GeometryType from 'ol/geom/GeometryType';
// import { useDispatch } from 'react-redux';
// import { changeCurrent } from '../redux/InteractionReducer';
const INITIAL_ZOOM = 9;
const MIN_ZOOM = 4
// es-linter prettifier
// constructor small functions
// fixed route from first load
//
const SELECTOR_STYLES: React.CSSProperties = {
    position: 'absolute',
    left: '100px',
    zIndex: 3,
    width: 'fit-content',
    height: 'fit-content',
}
export const AdminMap: React.FC = () => {
    let draw: Draw;
    const mapRef = React.createRef<HTMLDivElement>();
    const select = new Select();
    const translate = new Translate({
        features: select.getFeatures(),
    });
    const drawSource = new VectorSource();
    const modify = new Modify({
        source: new VectorSource()
    });
    const view = new View({
        zoom: INITIAL_ZOOM,
        minZoom: MIN_ZOOM,
    });
    const drawLayer = vectorLayer(drawSource)

    const map = new Map({
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
            drawLayer
        ],
        view: view,
    });

    const removeFeature = (e: MapBrowserEvent<UIEvent>) => {
        map.forEachFeatureAtPixel(e.pixel, (feat) => {
            const allFeatures = drawSource.getFeatures();
            const TypedFeatureIndex = allFeatures.findIndex((el) => {
                if (el === feat) return true;
                else return false;
            })
            drawSource.removeFeature(allFeatures[TypedFeatureIndex]);
        })
    }

    const changeInteraction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        map.removeInteraction(draw);
        map.un('click', removeFeature);
        map.removeInteraction(select);
        map.removeInteraction(translate);
        console.log(e.target.value);
        if (e.target.value === 'Point') {
            addInteractions(GeometryType.POINT);
        }
        if (e.target.value === 'LineString') {
            addInteractions(GeometryType.LINE_STRING);
        }
        if (e.target.value === 'Correcting') {
            map.on('click', removeFeature)
        }
        if (e.target.value === 'Replace') {
            map.addInteraction(translate);
            map.addInteraction(select);
        }

    }

    function vectorLayer(pointsLayer: VectorSource<Geometry>) {
        return new VectorLayer({
            source: pointsLayer,
            style: new Style({
                fill: new Fill({
                    color: 'rgba(255, 255, 255, 0.2)',
                }),
                stroke: new Stroke({
                    color: '#fb4c20',
                    width: 2,
                }),
                image: new CircleStyle({
                    radius: 7,
                    fill: new Fill({
                        color: '#f52f15',
                    }),
                }),
            }),
        });
    }

    const addInteractions = (value: GeometryType) => {
        draw = new Draw({
            source: drawSource,
            type: value
        });
        map.addInteraction(draw);
    }

    // const addNewPoint = (e: MapBrowserEvent<UIEvent>) => {
    //     const newPoint = new Feature(new Point(e.coordinate));
    //     newPoint.setStyle(new Style({
    //         image: new RegularShape({
    //             fill: new Fill({ color: 'red' }),
    //             stroke: new Stroke({ color: 'black', width: 2 }),
    //             radius: 10 / Math.SQRT2,
    //             radius2: 10,
    //             points: 4,
    //             angle: 0,
    //         }),

    //     }));
    //     drawSource.addFeature(newPoint);
    // };


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
        }
    }, []);

    return (
        <div ref={mapRef}>
            <div style={SELECTOR_STYLES} className="interaction_selector-handler">
                <select onChange={(e) => changeInteraction(e)} id="type">
                    <option value={'Correcting'}>Correcting</option>
                    <option value={'Replace'}> Replace</option>
                    <option value={'Point'}>Point</option>
                    <option value={'LineString'}>Line</option>
                </select>
            </div>
        </div>


    );
}
