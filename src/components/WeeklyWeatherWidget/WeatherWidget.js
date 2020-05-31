import React, { Component } from 'react';

class WeatherWidget extends Component {
    render() {
        const { data: { temp, weather } } = this.props
        return (
            <div className="widget">qw
                <div className="maxtemp">{ temp.max }</div>
                <div className="mintemp">{ temp.min }</div>
            </div>
        );
    }
}

export default WeatherWidget;