import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import { TRACK_LYRICS, TRACK_DETAILS } from '../../constants';
import Spinner from '../layout/Spinner';

const Lyrics = props => {
	const [track, setTrack] = useState({});
	const [lyrics, setLyrics] = useState({});

	useEffect(() => {
		Axios.all([
			Axios.get(TRACK_LYRICS + `${props.match.params.id}`),
			Axios.get(TRACK_DETAILS + `${props.match.params.id}`),
		])
			.then(
				Axios.spread((trackLyrics, trackDetails) => {
					setLyrics(trackLyrics.data.message.body.lyrics);
					setTrack(trackDetails.data.message.body.track);
				})
			)
			.catch(err => console.log(JSON.parse(JSON.stringify(err))));
	}, []);

	if (
		track === undefined ||
		lyrics === undefined ||
		Object.keys(track).length === 0 ||
		Object.keys(lyrics).length === 0
	) {
		return <Spinner />;
	} else {
		return (
			<React.Fragment>
				<Link to='/' className='btn btn-dark btn-sm mb-4'>
					Go Back
				</Link>
				<div className='card'>
					<h5 className='card-header'>
						{track.track_name} by{' '}
						<span className='text-secondary'>{track.artist_name}</span>
					</h5>
					<div className='card-body'>
						<p className='card-text'>{lyrics.lyrics_body}</p>
					</div>
				</div>
				<ul className='list-group mt-3'>
					<li className='list-group-item'>
						<strong>Album ID</strong> : {track.album_id}
					</li>
					<li className='list-group-item'>
						<strong>Genre</strong> :{' '}
						{
							track.primary_genres.music_genre_list[0].music_genre
								.music_genre_name
						}
					</li>
					<li className='list-group-item'>
						<strong>Explicit</strong> :{track.explicit === 0 ? 'No' : 'Yes'}
					</li>
				</ul>
			</React.Fragment>
		);
	}
};

export default Lyrics;
