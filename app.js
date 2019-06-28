try {
	Ext.application({
		extend: 'ExtJSWithReactConcept.Application',
		name: 'ExtJSWithReactConcept'
	});
} catch (error) {
	console.warn(error.message);
}