import L from 'leaflet';
import * as React from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useDispatch } from 'react-redux';
import { setCurrentPoint, showSettings } from '../redux/reducer';
import { DescriptionComponent } from './components/PointDescriptionComponent/Description';
// import { useTypedSelector } from '../redux/useTypedSelector.hook';

export const AdminMap: React.FC = () => {
    const dispatch = useDispatch()
    // const isSettingsShawn = useTypedSelector(store => store.settings.isSettingsShawn);

    const _onCreated = (e: { layer: any; }) => {
        console.log(e)
        const layer = e.layer;
        if (layer instanceof L.Marker) {
            layer.addEventListener('click', () => {
                console.log('markerClicked');
                dispatch(showSettings());
                dispatch(setCurrentPoint(layer))
            })
        }
        if (layer instanceof L.Polyline) {
            console.log('pressed');
        }
    }

    const _onEdited = (e: { layers: any; }) => {
        console.log(e)
        const layers = e.layers;
        layers.eachLayer((layer: { bindPopup: (arg0: L.Popup) => void; }) => {
            if (layer instanceof L.Marker) {
                const pointPopup = L.popup();
                pointPopup.setContent('Point popup')
                layer.bindPopup(pointPopup)
            }
        })
    }

    const _onDeleted = (e: any) => {
        console.log(e);
    }
    return (
        <>
        <DescriptionComponent />
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