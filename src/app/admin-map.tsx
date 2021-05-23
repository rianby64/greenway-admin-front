import *  as React from 'react';
import { MapContainer } from 'react-leaflet';
import { DescriptionComponent } from './components/PointDescriptionComponent/Description';
import { useTypedSelector } from '../redux/useTypedSelector.hook';
import { MapControl } from './components/MapControl/MapControl';
import { SaveRoute } from './components/SaveRoute/saveRoute';

export const AdminMap: React.FC = () => {
    const { currentFeature } = useTypedSelector(store => store.route)
    const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false)
    return (
        <>
            <DescriptionComponent currentFeature={currentFeature} />
            <MapContainer
                center={[53.893009, 27.567444]}
                zoom={9}
                scrollWheelZoom={true}
            >
                <MapControl />
            </MapContainer>
            <button
                className='waves-effect waves-light btn red'
                style={{ zIndex: 1999, position: 'absolute', bottom: 0, left: '45%' }}
                onClick={() => { setSaveRouteMenu(true) }}>
                СОХРАНИТЬ
            </button>
            <SaveRoute isShawn={saveRouteMenu} setIsShawn={setSaveRouteMenu} />
        </>
    )
}
