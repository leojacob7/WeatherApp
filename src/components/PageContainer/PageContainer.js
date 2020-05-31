import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeeklyWeatherWidget from '../WeeklyWeatherWidget/WeeklyWeatherWidget';
import { fetchLocationAction } from '../../redux/actions/location';

class PageContainer extends Component {
	state = {
		userRegionName: '',
	};
	componentDidMount() {
		this.props.fetchLocationAction();
	}

	// static getDerivedStateFromProps(props, state) {
	// 	if (props.userRegionName !== state.userRegionName) {
	// 		return {
	// 			userRegionName: props.userRegionName,
	// 		};
	// 	}

	// 	// Return null if the state hasn't changed
	// 	return null;
	// }

	render() {
		const { userRegionName, latitude, longitude } = this.props;

		return (
			<div className="weeklyWeatherWidget">
				{userRegionName && (
					<WeeklyWeatherWidget
						userRegionName={userRegionName}
						latitude={latitude}
						longitude={longitude}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {

	return {
		userRegion: state.location.data.region,
		userRegionName: state.location.data.regionName,
		latitude: state.location.data.lat,
		longitude: state.location.data.lon,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchLocationAction: () => dispatch(fetchLocationAction()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
