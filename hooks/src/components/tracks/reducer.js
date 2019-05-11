const SEARCH_TRACKS = 'SEARCH_TRACKS';
const LOAD_INDEX = 'LOAD_INDEX';

const initialState = {
	track_list: [],
	heading: '',
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_INDEX:
			return {
				track_list: action.payload,
				heading: 'Top 10 songs',
			};
		case SEARCH_TRACKS:
			return {
				track_list: action.payload,
				heading: 'Search Results',
			};
		default:
			return state;
	}
}
