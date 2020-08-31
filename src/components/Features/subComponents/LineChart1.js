import React from "react";
import "./chart.css";
import { Bar, Line, Pie } from "react-chartjs-2";

class LineChart1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ChartData: {
        labels: ["a", "b", "c", "d", "e", "f", "g"],
        datasets: [
          {
            label: "Subscriber Gained",
            data: [1, 4, 3, 6, 5, 9, 6, 7],
            borderColor: "rgb(116, 104, 240)",
            fill: false,
            pointRadius: 0,
            xAxisID: false,
            yAxisID: false,
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="LineChart1">
        <Line
          data={this.state.ChartData}
          width={100}
          height={50}
          options={{
            title: {
              display: true,
              text: "92.6k",
              fontSize: 25,
            },
            legend: {
              display: true,
              position: "top",
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default LineChart1;
