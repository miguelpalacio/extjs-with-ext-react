import React, { Component } from 'react';
import MySecondCmp from './my-second-cmp';
// import MyExtReactCmp from './my-ext-react-cmp';

class MyReactCmp extends Component {
	render() {
		return (
			<div>
				<MySecondCmp />
				{/* <MyExtReactCmp /> */}
			</div>
		)
	}
}

export default MyReactCmp;