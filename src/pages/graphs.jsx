import React, { useEffect, useState } from "react";
import Chart from "../components/chart/chartComponent";
import NavComponent from "../components/navigation/navComponent";

function Graphs() {
  const [processors, setProcessors] = useState([]);
  const [prices, setPrices] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("/home").then((response) =>
      response.json().then((data) => {
        setProcessors(Object.keys(data));
        let priceList = [];
        let colorList = [];
        Object.values(data).forEach((element) => {
          priceList.push(element.substring(2));
        });

        Object.keys(data).forEach((el) => {
          if (el.charAt(0) === "R") {
            colorList.push("#eb4034");
          } else if (el.charAt(0) === "i") {
            colorList.push("#f7f8fa");
          }
        });
        setPrices(priceList);
        setColors(colorList);
      })
    );
  }, []);

  return (
    <div>
      <NavComponent />
      <Chart processors={processors} prices={prices} colors={colors} />
    </div>
  );
}

export default Graphs;
