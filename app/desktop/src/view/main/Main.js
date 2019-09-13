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

	layout: 'hbox',

	//-----------------------------------
	// App Header
	//-----------------------------------

	title: 'ExtJS With React',

	iconCls: 'x-fa fa-calendar-check-o',

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
					const { ReactDOMRender } = window.myVars;
					ReactDOMRender('MyReactCmp', cmp.el.dom);
				}
			}
		},
	]
});