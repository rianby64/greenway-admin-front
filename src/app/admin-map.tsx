import L from 'leaflet';
import * as React from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

export const AdminMap: React.FC = () => {
    const _onCreated = (e) => {
        console.log(e)
        const layer = e.layer;
        if (layer instanceof L.Marker) {
            layer.addEventListener('click', () => {
                console.log('markerClicked');
            })
        }
        if (layer instanceof L.Polyline) {
            console.log(layer.getLatLngs());
        }
    }

    const _onEdited = (e) => {
        console.log(e)
        const layers = e.layers;
        layers.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                const pointPopup = L.popup();
                pointPopup.setContent('Point popup')
                layer.bindPopup(pointPopup)
            }
        })
    }

    const _onDeleted = (e) => {
        console.log(e);
    }
    return (
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
    )
}