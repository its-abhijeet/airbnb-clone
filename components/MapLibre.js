import React, { useRef, useEffect, useState } from "react";
import Marker from "react-map-gl";
import maplibregl from "maplibre-gl";
import getCenter from "geolib/es/getCenter";

export default function Map({ searchResults }) {
  //   Transform the search results object into the {latitude:52.516272,longitude:13.377722} object
  const coordinates = searchResults.record.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-0.0022275);
  const [lat] = useState(51.5421655);
  const [zoom] = useState(14);
  const [API_KEY] = useState("y9dR23AahkcDosQqqvox");
  //   console.log(coordinates);
  const center = getCenter(coordinates);
  //   console.log(center);
  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([center.longitude, center.latitude])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap relative w-full h-full">
      <div ref={mapContainer} className="map absolute w-full h-full">
        {/* {searchResults.record.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-20}
              className="z-50 absolute"
            >
              <p>📍</p>
            </Marker>
          </div>
        ))} */}
      </div>
    </div>
  );
}
