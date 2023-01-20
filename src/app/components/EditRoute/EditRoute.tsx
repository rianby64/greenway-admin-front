import React from 'react'
import { MapContainer } from 'react-leaflet'
import { useTypedSelector } from '../../../redux/useTypedSelector.hook'
import { DescriptionComponent } from '../PointDescriptionComponent/Description'
import { SaveRoute } from '../SaveRoute/saveRoute'
import { EditingMapControl } from './components/EditMapControl/EditMapControl';


export const CreateEditingMap: React.FunctionComponent = () => {
  const { currentFeature } = useTypedSelector(store => store.route);
  const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
  return (
    <>
      <DescriptionComponent currentFeature={currentFeature} />
      <MapContainer
        center={[53.893009, 27.567444]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <EditingMapControl/>
      </MapContainer>
      <button
        className='waves-effect waves-light btn red'
        style={{ zIndex: 1999, position: 'absolute', bottom: 0, left: '45%' }}
        onClick={() => { setSaveRouteMenu(true) }}>
        Изменить хар-ки
        </button>
      <SaveRoute isEditing={true} isShawn={saveRouteMenu} setIsShawn={setSaveRouteMenu} />
    </>
  )
}