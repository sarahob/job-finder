"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import geoData from "../data/geo.json";
import countryData from "../data/countries.json";
import { useWindowLayout } from "./hooks";

const Map = ({ data }) => {
  const mapRef = useRef();
  const [width, height] = useWindowLayout();

  const projection = d3
    .geoMercator()
    .scale(width / 1.5 / Math.PI)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  const getCircleData = () => {
    const circleData = [];
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const location = countryData
          .filter((d) => {
            return d.country === data[i].country;
          })
          .map((d) => {
            const [x, y] = projection([d.longitude, d.latitude]);
            return { country: d.country, x, y };
          });

        circleData.push(location[0]);
      }
    }
    return circleData.filter((d) => d !== undefined);
  };

  const drawCircles = () => {
    const data = getCircleData();

    d3.select(mapRef.current)
      .append("g")
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 0)
      .attr("fill", "#FBCEB1")
      .transition()
      .duration(500)
      .attr("r", 10);
  };

  useEffect(() => {
    drawMap();
    drawCircles();
  }, [height, width]);

  const drawMap = () => {
    d3.select(mapRef.current)
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#73BBC9")
      .attr("stroke", "#F1D4E5");
  };

  return (
    <div>
      <svg height={height} width={width} ref={mapRef}></svg>
    </div>
  );
};

export default Map;
