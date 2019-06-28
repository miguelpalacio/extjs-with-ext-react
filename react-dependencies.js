import React from 'react';
import ReactDOM from 'react-dom';
// import MainPanelController from './resources/atg-react-demo/src/main-panel/main-panel-controller';
import MyReactCmp from './resources/my-react-cmp';

const ReactDOMRender = (key, el) => {
	ReactDOM.render(window.myVars[key], el);
};

window.myVars = {
	React,
	ReactDOM,
	ReactDOMRender,
	// MainPanelController
	MyReactCmp: <MyReactCmp />
};