import React from "react";
import ProcessorItem from "./processorItem";

function ProcessorListComponent(props) {
  const { items } = props;

  if (!items) {
    return <div></div>;
  }

  return (
    <div className="processors">
      {items.map((element) => {
        return <ProcessorItem key={element.id} processor={element} />;
      })}
    </div>
  );
}

export default ProcessorListComponent;
