import React from 'react';
import ReactDOM from 'react-dom';
import MyReactCmp from './components/my-react-cmp';

const ReactDOMRender = (key, el) => {
	ReactDOM.render(window.myVars[key], el);
};

window.myVars = {
	React,
	ReactDOM,
	ReactDOMRender,
	MyReactCmp: <MyReactCmp />
};