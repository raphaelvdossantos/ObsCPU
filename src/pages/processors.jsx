import React, { useEffect, useState } from "react";
import NavComponent from "../components/navigation/navComponent";
import Logo from "../components/logo/logoComponent";
import ProcessorListComponent from "../components/info/processorComponent";

export default function Processors() {
  const [processors, setProcessors] = useState(null);
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
          pageIndex: 2,
        },
        {
          id: 2,
          value: "Processadores",
          url: "/processors",
          navClass: "hover-this odd",
          pageIndex: 2,
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
          pageIndex: 2,
        },

        {
          id: 3,
          value: "Twitter",
          url: "/twitter",
          navClass: "hover-this",
          pageIndex: 2,
        },
      ],
      nav: { id: 1, className: "nav" },
    },
  };

  useEffect(() => {
    let cpuList = [];
    fetch("/cpus").then((response) => {
      response.json().then((data) => {
        for (var obj in data) {
          let i = 0;
          cpuList.push({ id: i, value: obj, price: data[obj] });
        }
        setProcessors(cpuList);
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
      <ProcessorListComponent items={processors} />
    </div>
  );
}
