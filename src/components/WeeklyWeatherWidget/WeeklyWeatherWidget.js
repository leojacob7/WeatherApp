import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeeklyWeatherDataAction } from '../../redux/actions/weather'
import WeatherWidget from './WeatherWidget';
import _ from 'lodash';

class WeeklyWeatherWidget extends Component {
    componentDidMount() {
        const { latitude, longitude, fetchLocationAction } = this.props;
        console.log("here", latitude);
        latitude && longitude && fetchLocationAction(latitude, longitude);
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("Inside shouldComponentUpdate");
        // console.log("props", this.props.weatherInfo);
        // console.log("next props", nextProps.weatherInfo);
        return this.props.weatherInfo !== nextProps.weatherInfo;
    }

    renderWidgets = () => {
        const { daily } = this.props.weatherInfo;
        for (let index = 0; index < 7; index++) {
            console.log("index", index );
            return <WeatherWidget data={ daily[index] }/>
        }
    }

    render() {
        const { weatherInfo } = this.props;
        console.log("weather info", this.props.weatherInfo.length);
        console.log("I am in ", this.props.userRegionName);

        return (
                <div className="weeklyWidgetContainer">
                    { ( weatherInfo.length > 0 || !_.isEmpty(weatherInfo)) && this.renderWidgets() }
               </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("Re rendering here");
	return {
		weatherInfo: state.weather.weatherData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchLocationAction: (latitude, longitude) => dispatch(fetchWeeklyWeatherDataAction(latitude, longitude)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyWeatherWidget);