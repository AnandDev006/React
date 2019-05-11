import Axios from 'axios';

import { TRACK_SEARCH, TOP_SONGS_BY_COUNTRY } from '../../constants';

const SEARCH_TRACKS = 'SEARCH_TRACKS';
const LOAD_INDEX = 'LOAD_INDEX';

export const loadIntialList = () => dispatch => {
	Axios.get(TOP_SONGS_BY_COUNTRY + `in`)
		.then(res => {
			dispatch({
				type: LOAD_INDEX,
				payload: res.data.message.body.track_list,
			});
		})
		.catch(err => console.log(err));
};

export const searchTracks = trackTitle => dispatch => {
	Axios.get(TRACK_SEARCH + `${trackTitle}`)
		.then(res => {
			dispatch({
				type: SEARCH_TRACKS,
				payload: res.data.message.body.track_list,
			});
		})
		.catch(err => console.log(err));
};
