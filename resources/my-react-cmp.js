import React, { Component } from 'react';
import { Grid, Column, WidgetCell, Button, Progress } from '@sencha/ext-modern';
import MySecondCmp from './my-second-cmp';
// import CountDown from 'miguelpalacio-countdown-timer';

import AtgReactDemo from 'miguelpalacio-atg-react-demo';

// import MainPanelController from './atg-react-demo/src/main-panel/main-panel-controller';
// import AgentsGridController from './atg-react-demo/src/main-panel/agents-grid/agents-grid-controller';


// function MyReactCmp(props) {
// 	return (
// 		<div>
// 			<p>Miguel</p>
// 			<button>Un botón</button>
// 		</div>
// 	)
// };


// function MyReactCmp(props) {
// 	return (
// 		<Grid
// 			flex={1}
// 			height='100%'
// 			style={'background:white'}
// 		>
// 			<Column
// 				text='Agent'
// 				dataIndex='name'
// 				flex={1}
// 			>
// 			</Column>
// 			<Column
// 				text='Agent Team'
// 				dataIndex='agentTeam'
// 				width={200}
// 			>
// 			</Column>
// 		</Grid>
// 	)
// };

// function MyReactCmp(props) {
// 	return (
// 		// <MainPanelController />
// 		<AgentsGridController />
// 	)
// };

class MyReactCmp extends Component {
	render() {
		return (
			// <MySecondCmp />
			// <CountDown />
			<AtgReactDemo />
			
			// <Grid />

			// <AgentsGridController />

			// <div>
			// 	<p>Miguel</p>
			// 	<button>Un botón</button>
			// </div>
		)
	}
}

export default MyReactCmp;