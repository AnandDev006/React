import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../layout/Spinner';
import Track from '../tracks/Track';

const Tracks = props => {
	if (props.track_list === undefined || props.track_list.length === 0) {
		return <Spinner />;
	} else {
		return (
			<React.Fragment>
				<h3 className='text-center mb-4'>{props.heading}</h3>
				<div className='row'>
					{props.track_list.map(item => (
						<Track key={item.track.track_id} track={item.track} />
					))}
				</div>
			</React.Fragment>
		);
	}
};

const mapStateToProps = state => ({
	track_list: state.tracks.track_list,
	heading: state.tracks.heading,
});

export default connect(mapStateToProps)(Tracks);
