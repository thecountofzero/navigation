steal('can/model',
	'can/observe/attributes', function() {

	window.MYAPP = window.MYAPP || {};
	window.MYAPP.Models = window.MYAPP.Models || {};

	window.MYAPP.Models.NavItem = can.Model({

		attributes: {
            subItems: 'can.Model.models'
        },

        findAll : 'GET /navigation/navitems.json'
    }, {});
});
