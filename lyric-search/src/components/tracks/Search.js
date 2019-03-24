import React, { Component } from "react";
import { Consumer } from "../../context";
import Axios from "axios";

import { TRACK_SEARCH } from "../../constants";

class Search extends Component {
	state = {
		trackTitle: ""
	};

	onChange = e => {
		const { name, value } = e.target;
		this.setState((prevState, props) => {
			return {
				[name]: value
			};
		});
	};

	findTrack = (dispatch, e) => {
        e.preventDefault();
		Axios.get(TRACK_SEARCH + `${this.state.trackTitle}`)
			.then(res => {
				dispatch({
                    type:'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list,
                });
                this.setState( (prevState, props) => {
                    return {
                        trackTitle: ''
                    }
                })
			})
			.catch( err => console.log(err));
	};

	render() {
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<i className="fas fa-music" /> Search For A Song
							</h1>
							<p className="lead text-center">
								Get the lyrics for any song
							</p>
							<form onSubmit={this.findTrack.bind(null, dispatch)}>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Song title..."
										name="trackTitle"
										value={this.state.trackTitle}
										onChange={this.onChange}
									/>
								</div>
								<button
									className="btn btn-primary btn-lg btn-block mb-5"
									type="submit"
								>
									Get Track Lyrics
								</button>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;
