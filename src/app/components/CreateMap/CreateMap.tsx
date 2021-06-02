import React from 'react'
import { MapContainer } from 'react-leaflet'
import { useTypedSelector } from '../../../redux/useTypedSelector.hook'
import { DropDown } from '../DropDawn/DropDawn'
import { MapControl } from '../MapControl/MapControl'
import { DescriptionComponent } from '../PointDescriptionComponent/Description'
import { SaveRoute } from '../SaveRoute/saveRoute'

export const CreateMap: React.FunctionComponent = () => {
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
      <DropDown />
      <SaveRoute isEditing={false} isShawn={saveRouteMenu} setIsShawn={setSaveRouteMenu} />
    </>
  )
}