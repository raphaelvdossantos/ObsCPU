import React, { useEffect, useState } from "react";
import NavComponent from "../components/navigation/navComponent";
import ProcessorListComponent from "../components/info/processorComponent";

export default function Processors() {
  const [processors, setProcessors] = useState(null);

  useEffect(() => {
    let cpuList = [];
    fetch("/cpus").then((response) => {
      response.json().then((data) => {
        for (var obj in data) {
          let i = 0;
          cpuList.push({ id: i, value: obj, price: data[obj] });
        }
        setProcessors(cpuList);
      });
    });
  }, []);

  return (
    <div>
      <NavComponent />
      <ProcessorListComponent items={processors} />
    </div>
  );
}
