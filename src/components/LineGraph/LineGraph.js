import React, {Component} from 'react'
import LineChart from 'react-linechart'
import '../../../node_modules/react-linechart/dist/styles.css'
import '../../App.css'

export default class LineGraph extends Component {
  render() {
    const data = [
      {
        color: 'steelblue',
        points: [
          {x: 21, y: 3},
          {x: 22, y: 4},
          {x: 23, y: 2},
          {x: 24, y: 15},
          {x: 25, y: 2},
        ],
      },
    ]
    return (
      <div>
        <div className="App">
          <div>
            <LineChart
              hideYLabel
              // hideXAxis
              hideYAxis
              width={500}
              height={400}
              data={data}
            />
            <div className="widgetContainer">
              <div className="lineContainer">
                <div className="oneLine lineOne" />
                <p1>One</p1>
              </div>

              <div className="lineContainer">
                <div className="oneLine lineTwo" />
                <p1>Two</p1>
              </div>
              <div className="lineContainer">
                <div className="oneLine lineThree" />
                <p1>Three</p1>
              </div>
              <div className="lineContainer">
                <div className="oneLine lineFour" />
                <p1>Four</p1>
              </div>
              <div className="lineContainer">
                <div className="oneLine lineFive" />
                <p1>Five</p1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
