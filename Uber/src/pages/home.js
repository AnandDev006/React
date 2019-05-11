// @flow
import React from 'react';
import { Button } from 'baseui/button';

const Home = () => (
	<Button
		overrides={{
			BaseButton: {
				style: ({ $theme }) => ({ 'background-color': $theme.colors.negative }),
			},
		}}
	>
		Hi
	</Button>
);

export default Home;
