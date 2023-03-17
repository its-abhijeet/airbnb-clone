import React, { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import getCenter from "geolib/es/getCenter";

function MapLibreSecond({ searchResults }) {
  const [API_KEY] = useState("y9dR23AahkcDosQqqvox");
  //   Transform the search results object into the {latitude:52.516272,longitude:13.377722} object
  const coordinates = searchResults.record.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //   console.log(coordinates);
  const center = getCenter(coordinates);
  //   console.log(center);
  return (
    <Map
      id="map"
      mapLib={maplibregl}
      initialViewState={{
        longitude: -0.0022275,
        latitude: 51.5421655,
        zoom: 14,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=y9dR23AahkcDosQqqvox"
    >
      {searchResults.record.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-20}
            className="z-50"
          >
            <p>📍</p>
          </Marker>
          {/* {var london = new maplibregl.Marker().setLngLat([result.long,result.lat]).addTo(map)}  */}
        </div>
      ))}
    </Map>
  );
}

export default MapLibreSecond;
