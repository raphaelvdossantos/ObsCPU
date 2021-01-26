import React, { useEffect, useState } from "react";
import Chart from "../components/chart/chartComponent";
import NavComponent from "../components/navigation/navComponent";
import Logo from "../components/logo/logoComponent";

function Graphs() {
  const [processors, setProcessors] = useState([]);
  const [prices, setPrices] = useState([]);
  const [colors, setColors] = useState([]);
  const [evenNavItems, setEvenNavItems] = useState(null);
  const [oddNavItems, setOddNavItems] = useState(null);
  const [logo, setLogo] = useState(null);

  const logoState = { logo: { className: "logoBlock skewed" } };

  const navItemsState = {
    oddPair: {
      navItems: [
        {
          id: 0,
          value: "Início",
          url: "/",
          navClass: "hover-this odd",
          pageIndex: 1,
        },
        {
          id: 2,
          value: "Processadores",
          url: "/processors",
          navClass: "hover-this odd",
          pageIndex: 1,
        },
      ],
      nav: { id: 1, className: "nav  odd-nav" },
    },
    evenPair: {
      navItems: [
        {
          id: 1,
          value: "Gráficos",
          url: "/graphs",
          navClass: "hover-this",
          pageIndex: 1,
        },

        {
          id: 3,
          value: "Twitter",
          url: "/twitter",
          navClass: "hover-this",
          pageIndex: 1,
        },
      ],
      nav: { id: 1, className: "nav" },
    },
  };

  useEffect(() => {
    fetch("/home").then((response) => {
      response.json().then((data) => {
        setProcessors(Object.keys(data));
        let priceList = [];
        let colorList = [];
        Object.values(data).forEach((element) => {
          priceList.push(element.substring(2));
        });

        Object.keys(data).forEach((el) => {
          if (el.charAt(0) === "R") {
            colorList.push("#F03A47");
          } else if (el.charAt(0) === "i") {
            colorList.push("#072AC8");
          }
        });
        setPrices(priceList);
        setColors(colorList);
        setEvenNavItems(navItemsState.evenPair);
        setOddNavItems(navItemsState.oddPair);
        setLogo(logoState);
      });
    });
  }, []);

  return (
    <div>
      <Logo {...logo} />
      <NavComponent {...evenNavItems} />
      <NavComponent {...oddNavItems} />
      <Chart processors={processors} prices={prices} colors={colors} />
    </div>
  );
}

export default Graphs;
