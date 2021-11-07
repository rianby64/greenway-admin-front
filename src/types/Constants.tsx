
export const MapLayers =  {
    Sattelite: {
        mapAttribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        mapLayersUrl: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        name: 'sat'
    },

    OSM: {
        mapAttribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        mapLayersUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        name: 'osm'

    }
}