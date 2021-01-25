import React, { useEffect, useState } from "react";
import NavComponent from "../components/navigation/navComponent";
import ProcessorListComponent from "../components/info/processorComponent";

export default function Processors() {
  const [processors, setProcessors] = useState(null);
  const [navItems, setNavitem] = useState(null);

  const navItemsState = {
    navItems: [
      {
        id: 0,
        value: "Início",
        url: "/",
        navClass: "hover-this",
        pageIndex: 2,
      },
      {
        id: 1,
        value: "Gráficos",
        url: "/graphs",
        navClass: "hover-this",
        pageIndex: 2,
      },
      {
        id: 2,
        value: "Processadores",
        url: "/processors",
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
    nav: { id: 2, className: "nav" },
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
        setNavitem(navItemsState);
      });
    });
  }, []);

  return (
    <div>
      <NavComponent {...navItems} />
      <ProcessorListComponent items={processors} />
    </div>
  );
}
