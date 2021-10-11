import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const APIKey = process.env.REACT_APP_GOOGLE_MAP_API
const lat = 50.88073687151539
const lng = -1.030118673706717

const mapContainerStyle = {
  height: "400px",
  width: "100%"
}

const center = {
  lat: lat,
  lng: lng
}

const position = {
  lat: lat,
  lng: lng
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

function MyComponent() {
  return (

  <LoadScript googleMapsApiKey={APIKey}>
  <GoogleMap
    id="marker-example"
    mapContainerStyle={mapContainerStyle}
    zoom={19}
    center={center}
  >
    {/* <Marker
      onLoad={onLoad}
      position={position}
      icon={Symbol}
    /> */}
  </GoogleMap>
  </LoadScript>
  )
}


export default React.memo(MyComponent)





