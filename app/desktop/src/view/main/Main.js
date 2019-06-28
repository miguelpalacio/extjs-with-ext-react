// import React from 'react';
Ext.define('ExtJSWithReactConcept.view.main.Main', {

	//-----------------------------------
	// XType
	//-----------------------------------

	xtype: 'main',

	//-----------------------------------
	// Extend / Requires
	//-----------------------------------

	extend: 'Ext.panel.Panel',
	requires: [
		'Ext.plugin.Viewport',
		'Ext.layout.container.Fit'
	],
	plugins: 'viewport',

	//-----------------------------------
	// Properties
	//-----------------------------------

	// controller: 'mainVC',
	// viewModel: {
	// 	type: 'mainVM'
	// },

	layout: 'hbox',

	//-----------------------------------
	// App Header
	//-----------------------------------

	title: 'ExtJS With React',

	iconCls: 'x-fa fa-calendar-check-o',

	//-----------------------------------
	// Bottom toolbar
	//-----------------------------------

	//-----------------------------------
	// App Content
	//-----------------------------------

	defaults: {
		margin: '6 0 6 0',
		flex: 1,
		height: '100%'
	},

	items: [
		{
			xtype: 'container',
			layout: 'vbox',
			padding: '10',
			items: [
				{
					xtype: 'button',
					text: 'ExtJS button'
				},
				{
					xtype: 'datefield',
					fieldLabel: 'ExtJS date field',
					margin: '10 0 0 0'
				}
			]
		},
		{
			xtype: 'component',
			listeners: {
				afterrender: cmp => {
					// const { React, ReactDOM, MyReactCmp, ReactDOMRender } = window.myVars;

					// const e = React.createElement;

					// ReactDOM.render(
					// 	// e(<MyReactCmp />, null, 'ReactJS Component'),
					// 	MyReactCmp(),
					// 	cmp.el.dom
					// );

					const { ReactDOMRender } = window.myVars;
					ReactDOMRender('MyReactCmp', cmp.el.dom);
				}
			}
		},
	],

	//-----------------------------------
	// Constructor: used to set up options dynamically on app load
	//-----------------------------------

	// constructor: function (config) {
	// 	config.bodyPadding = config.testing ? '0 6 0 6' : '0';

	// 	this.callParent([config]);
	// },

	//-----------------------------------
	// Listener
	//-----------------------------------
});