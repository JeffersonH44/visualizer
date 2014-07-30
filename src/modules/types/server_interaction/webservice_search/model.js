define(['modules/default/defaultmodel', 'src/util/datatraversing'], function(Default, Traversing) {
	
	function model() {};
	model.prototype = $.extend(true, {}, Default, {

		getjPath: function(rel, accepts) {
			var jpath = [];
			if(rel==="results")
				Traversing.getJPathsFromElement(this.module.model._data, jpath);
			return jpath;
		}

	});
	
	return model;
});
