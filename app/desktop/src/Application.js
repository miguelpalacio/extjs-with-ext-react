Ext.define('ExtJSWithReactConcept.Application', {

	extend: 'Ext.app.Application',

	requires: [
		'ExtJSWithReactConcept.view.main.Main'
	],

	name: 'ExtJSWithReactConcept',

	launch: function () {
		const whichView = 'main';

		if (Ext.isClassic == true) {
			Ext.create({ xtype: whichView });
		}
		else {
			Ext.Viewport.add([{xtype: whichView}]);
		}
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
