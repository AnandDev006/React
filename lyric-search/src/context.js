import React, { Component } from "react";
import Axios from "axios";
import { TOP_SONGS_BY_COUNTRY } from "./constants";

const Context = React.createContext();

export class Provider extends Component {
	state = {
		track_list: [],
		heading: "",
		dispatch: action => this.reducer(action),
	};

	reducer = (action) => {
		this.setState((prevState, props) => {
            switch (action.type) {
                case "SEARCH_TRACKS":
                    return {
                        track_list: action.payload,
                        heading: "Search Results"
                    };
                default:
                    return prevState;
            }
        })
	};

	componentDidMount() {
		Axios.get(TOP_SONGS_BY_COUNTRY + `in`)
			.then(res => {
				this.setState((prevState, props) => {
					return {
						track_list: res.data.message.body.track_list,
						heading: "Top 10 songs"
					};
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;
