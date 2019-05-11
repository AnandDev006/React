import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

import { loadIntialList } from '../tracks/actions';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';
import { TOP_SONGS_BY_COUNTRY } from '../../constants';

const Index = props => {
	useEffect(() => {
		props.loadIntialList();
	}, []);

	return (
		<React.Fragment>
			<Search />
			<Tracks />
		</React.Fragment>
	);
};

Index.propTypes = {
	loadIntialList: Proptypes.func.isRequired,
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ loadIntialList }
)(Index);
