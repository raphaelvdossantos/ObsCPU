import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import "../../css/style.css";

export default class Chart extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      return {
        data: {
          labels: props.processors,
          datasets: [
            {
              label: "Preço por Processador",
              data: props.prices,
              backgroundColor: props.colors,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        },
      };
    }
    return null;
  }

  state = {};

  render() {
    const { data, options } = this.state;
    return (
      <div className="chart">
        <h1>Preço de Processadores</h1>
        <Bar data={data} options={options} />
      </div>
    );
  }
}
