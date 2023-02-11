import React from 'react'
import { MapContainer } from 'react-leaflet'
import { useTypedSelector } from '../../../redux/useTypedSelector.hook'
import { DescriptionComponent } from '../PointDescriptionComponent/Description'
import { SaveRoute } from '../SaveRoute/saveRoute'
import { EditingMapControl } from './components/EditMapControl/EditMapControl';
import * as Styled from './styled'
import Header from "../commonComponents/Header/Header";

export const CreateEditingMap: React.FunctionComponent = () => {
  const { currentFeature } = useTypedSelector(store => store.route);
  const [saveRouteMenu, setSaveRouteMenu] = React.useState<boolean>(false);
  return (
    <>
        <Header
            fetchedUsersRoutes={[]}
            fetchedVerified={[]}
            fetchedNotVerified={[]}
        />
      <DescriptionComponent currentFeature={currentFeature} />
      <MapContainer
          style={{height: "calc(100vh - 100px)"}}
        center={[53.893009, 27.567444]}
        zoom={9}
        scrollWheelZoom={true}
      >
        <EditingMapControl/>
      </MapContainer>
      <Styled.styledButton
        className='waves-effect waves-light btn red'
        style={{ zIndex: 1999, position: 'absolute', bottom: '60px', left: '75%' }}
        onClick={() => { setSaveRouteMenu(true) }}>
        СОХРАНИТЬ МАРШРУТ
        </Styled.styledButton>
      <SaveRoute isEditing={true} isShawn={saveRouteMenu} setIsShawn={setSaveRouteMenu} />
    </>
  )
}