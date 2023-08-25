import { useEffect, useMemo, useState } from "react";

import { Map, View } from "ol";
import { click } from "ol/events/condition";
import GeoJSON from "ol/format/GeoJSON";
import { Select } from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

export const MapBox = () => {
  const [mapObject, setMapObject] = useState<Map | null>(null);

  useEffect(() => {
    const source = new VectorSource({
      format: new GeoJSON(),
      url: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson",
    });
    const vectorLayerStyle = new Style({
      fill: new Fill({
        color: "#dddddd",
      }),
      stroke: new Stroke({
        color: "#fff",
      }),
    });

    const vector = new VectorLayer({
      source: source,
      background: "white",
      style: vectorLayerStyle,
    });

    const mapInstance = new Map({
      layers: [vector],
      target: "world-map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    setMapObject(mapInstance);

    return () => {
      mapInstance.setTarget(undefined);
    };
  }, []);

  const featureClick = useMemo(() => {
    const selected = new Style({
      fill: new Fill({
        color: "#0460ff",
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 2,
      }),
    });
    return new Select({
      condition: click,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style: (feature: any) => {
        const color = feature.get("COLOR") || "#0460ff";
        selected.getFill().setColor(color);
        return selected;
      },
    });
  }, []);

  useEffect(() => {
    if (mapObject) {
      mapObject.addInteraction(featureClick);
    }
  }, [mapObject, featureClick]);

  return <div id="world-map" style={{ width: "100%", height: "100vh" }}></div>;
};
