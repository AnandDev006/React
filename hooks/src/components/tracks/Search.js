import React, { useState } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { searchTracks } from './actions';
import { TRACK_SEARCH } from '../../constants';

const Search = props => {
	const [trackTitle, setTrackTitle] = useState('');

	const onChange = e => {
		setTrackTitle(e.target.value);
	};

	const findTrack = async e => {
		e.preventDefault();
		await props.searchTracks(trackTitle);
		setTrackTitle('');
	};

	return (
		<div className='card card-body mb-4 p-4'>
			<h1 className='display-4 text-center'>
				<i className='fas fa-music' /> Search For A Song
			</h1>
			<p className='lead text-center'>Get the lyrics for any song</p>
			<form onSubmit={findTrack}>
				<div className='form-group'>
					<input
						type='text'
						className='form-control form-control-lg'
						placeholder='Song title...'
						name='trackTitle'
						value={trackTitle}
						onChange={onChange}
					/>
				</div>
				<button className='btn btn-primary btn-lg btn-block mb-5' type='submit'>
					Get Track Lyrics
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ searchTracks }
)(Search);
