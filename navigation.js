steal('can/control',
	'can/view/ejs')
.then('navigation/models/nav_item.js', function() {

	window.MYAPP = window.MYAPP || {};
	window.MYAPP.Widgets = window.MYAPP.Widgets || {};

	window.MYAPP.Widgets.Navigation = can.Control({

		init : function() {
			var self = this;

			can.when(MYAPP.Models.NavItem.findAll({})).done(function(navItems) {

				self.navigationItems = navItems;
				self.element.append(can.view(steal.config().root.join('navigation/views/navigation').path, {
					navItems: navItems
				}));
			});
		}
	});
});