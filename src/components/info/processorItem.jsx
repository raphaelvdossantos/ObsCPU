import React, { Component } from "react";
import ProcessorImg from "../../assets/ryzen.png";
import "../../css/style.css";

class ProcessorItem extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      return props;
    }
  }

  state = {};

  render() {
    const { value, id, price } = this.state;
    return (
      <div className="processor-container" key={id}>
        <div>
          <img src={ProcessorImg} alt={value} />
        </div>
        <div className="processor-info-container">
          <h1>{value}</h1>
          <p className="processor-info">
            {price}
            Alguma informação relevante sobre o processador demonstrado.
          </p>
        </div>
      </div>
    );
  }
}

export default ProcessorItem;
