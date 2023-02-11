import * as React from 'react';
import { TileLayer, FeatureGroup, useMap } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useDispatch } from 'react-redux';
import { hideSettings, setCurrentFeature, showSettings } from '../../../../redux/useSettingsReducer';
import { removePoliline, addPoliline, removePoint, editPoint, setRouteDistance, addPoint } from '../../../../redux/useRoutesReducer';
import L from 'leaflet';
import { setDistanceZero } from '../../../../redux/useRoutesReducer';
import { MapLayers } from '../../../../types/Constants';
import ChangeTypeMap from "./ChangeTypeMap-Button/ChangeTypeMap";

export const MapControl: React.FunctionComponent = () => {
  const map = useMap()
  const [currentMapLayer, setCurrentMapLayer] = React.useState<string>(MapLayers.OSM.name)
  const dispatch = useDispatch()
  const currentFeatureDispatcher = (e) => {
    if (e.target instanceof L.Marker) dispatch(setCurrentFeature(e.target.getLatLng()))
    if (e.target instanceof L.Polyline) dispatch(setCurrentFeature(e.target.getLatLngs()[0]))
  }

  const calculateDistance = (arr: Array<any>): number => {
    let distance: number = 0;
    for (let index = 0; index < arr.length - 1; index++) {
      const distanceBetweenTwo = arr[index].distanceTo(arr[index + 1])
      distance += distanceBetweenTwo / 1000;
    }
    return parseFloat(distance.toFixed(2));
  }

  const showSettingsDispatcher = () => {
    dispatch(showSettings())
  }

  const _onCreated = (e: { layer: any; }) => {
    const layer = e.layer;
    layer.addEventListener('mousedown', currentFeatureDispatcher)
    if (layer instanceof L.Marker) {
      const pointPopup = L.popup();
      pointPopup.setContent('Нажмите на точку и добавьте описание')
      layer.bindPopup(pointPopup)
      layer.openPopup()
      layer.addEventListener('click', showSettingsDispatcher)
    }
    if (layer instanceof L.Polyline) {
      let counter: number = 0;
      map.eachLayer(layer => {
        if (counter > 1) map.removeLayer(layer)
        if (layer instanceof L.Polyline) {
          counter++
          dispatch(addPoliline(layer.getLatLngs()))
          dispatch(setRouteDistance(calculateDistance(layer.getLatLngs())))
        }
      })
    }
  }

  const _onEditStart = () => {
    dispatch(hideSettings());
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.removeEventListener('click', showSettingsDispatcher)
      }
    })
  }

  const _onEdited = (e: { layers: any; }) => {
    const pointsToEdit: Array<any> = [];
    const layers = e.layers;
    layers.eachLayer((layer: { bindPopup: (arg0: L.Popup) => void; }) => {
      if (layer instanceof L.Marker) {
        pointsToEdit.push(layer)
        dispatch(editPoint(pointsToEdit))
        layer.addEventListener('click', showSettingsDispatcher)
      }
      if (layer instanceof L.Polyline) {
        dispatch(setCurrentFeature(layer.getLatLngs()[0]))
        layer.removeEventListener('mouseover')
      }
    })
    dispatch(setDistanceZero())
    map.eachLayer((layer) => {
      if (layer instanceof L.Polyline) {
        dispatch(addPoliline(layer.getLatLngs()));
        dispatch(setRouteDistance(calculateDistance(layer.getLatLngs())))
      }
    })
  }

  const _OnEditMove = (e: any) => {
    const layer = e.layer;
    if (layer instanceof L.Marker) {
      dispatch(hideSettings())
      layer.addEventListener('mouseup', () => {
        dispatch(editPoint(layer.getLatLng()))
        layer.removeEventListener('mouseup')
      })
    }
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
        dispatch(setRouteDistance(0))
      }
    })
  }

  const _onDeleteStart = () => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.removeEventListener('click', showSettingsDispatcher)
      }
    })
  }

  const _onDeleteStop = () => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        layer.addEventListener('click', showSettingsDispatcher)
      }
    })
  }
  const switchLayer = () => {
    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        layer.remove()
        if (currentMapLayer === MapLayers.OSM.name) {
          const newTileLayer = new L.TileLayer(MapLayers.Sattelite.mapLayersUrl, { attribution: MapLayers.Sattelite.mapAttribution })
          map.addLayer(newTileLayer)
          setCurrentMapLayer(MapLayers.Sattelite.name)
        } else {
          const newTileLayer = new L.TileLayer(MapLayers.OSM.mapLayersUrl, { attribution: MapLayers.OSM.mapAttribution })
          map.addLayer(newTileLayer)
          setCurrentMapLayer(MapLayers.OSM.name)
        }
      }
    })
  }

  React.useEffect(() => {
    dispatch(addPoliline([]));
    dispatch(setCurrentFeature({}));
    dispatch(addPoint([]))
  }, [])

  return (
    <>
      <FeatureGroup>
        <EditControl
          position='topright'
          onDeleteStart={_onDeleteStart}
          onCreated={_onCreated}
          onEdited={_onEdited}
          onDeleted={_onDeleted}
          onEditStart={_onEditStart}
          onEditMove={_OnEditMove}
          onDeleteStop={_onDeleteStop}
          onEditStop={_onDeleteStop}
          onDrawStop={_onDeleteStop}
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
        attribution={MapLayers.OSM.mapAttribution}
        url={MapLayers.OSM.mapLayersUrl}
      />
      <div>
        <ChangeTypeMap switchLayer={switchLayer}/>
      </div>

    </>
  )
}
