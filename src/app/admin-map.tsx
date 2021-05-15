import L from 'leaflet';
import * as React from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useDispatch } from 'react-redux';
import { setCurrentFeature, showSettings } from '../redux/useSettingsreducer';
import { DescriptionComponent } from './components/PointDescriptionComponent/Description';
import { removePoliline, addPoliline, removePoint } from './../redux/useRoutesReducer';
import { useTypedSelector } from '../redux/useTypedSelector.hook';

export const AdminMap: React.FC = () => {
    const dispatch = useDispatch()
    const { points } = useTypedSelector(store => store.route)
    const { currentFeature } = useTypedSelector(store => store.settings)

    const currentFeatureDispatcher = (e) => {
        if (e.target instanceof L.Marker) dispatch(setCurrentFeature(e.target.getLatLng()))
        if (e.target instanceof L.Polyline) dispatch(setCurrentFeature(e.target.getLatLngs()[0]))
    }

    const _onCreated = (e: { layer: any; }) => {
        const layer = e.layer;
        layer.addEventListener('mouseover', currentFeatureDispatcher)
        if (layer instanceof L.Marker) {
            const pointPopup = L.popup();
            pointPopup.setContent('Нажмите на точку и добавьте описание')
            layer.bindPopup(pointPopup)
            layer.openPopup()
            layer.addEventListener('click', () => {
                dispatch(showSettings());
            })
        }
        if (layer instanceof L.Polyline) {
            layer.addEventListener('click', () => {
            })
            dispatch(addPoliline(layer.getLatLngs())
            )
        }
    }

    const _onEdited = (e: { layers: any; }) => {
        const layers = e.layers;
        layers.eachLayer((layer: { bindPopup: (arg0: L.Popup) => void; }) => {
            if (layer instanceof L.Marker) {
                console.log('try to find this marker in array of completed point if error change current marker')
                // editPoints(layer.getLatLng()[0], points)
                console.log(points, layers)

            }
        })
    }

    const _onDeleted = (e: any) => {
        const arrPoliLines: Array<any> = [];
        const arrMarkers: Array<any> = [];
        const layers = e.layers;
        layers.eachLayer((layer: { bindPopup: (arg0: L.Popup) => void; }) => {
            if (layer instanceof L.Marker) {
                arrMarkers.push(layer.getLatLng())
                dispatch(removePoint(arrMarkers))
            }
            if (layer instanceof L.Polyline) {
                arrPoliLines.push(layer.getLatLngs())
                dispatch(removePoliline(arrPoliLines))
            }
        })
    }
    return (
        <>
            <DescriptionComponent currentFeature={currentFeature} />
            <MapContainer
                center={[53.893009, 27.567444]}
                zoom={9}
                scrollWheelZoom={true}
            >
                <FeatureGroup>
                    <EditControl
                        position='topright'
                        onCreated={_onCreated}
                        onEdited={_onEdited}
                        onDeleted={_onDeleted}
                        draw={{
                            polygon: false,
                            rectangle: false,
                            polyline: true,
                            circle: false,
                            circlemarker: false,
                            marker: true
                        }}
                    />
                </FeatureGroup>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    )
}