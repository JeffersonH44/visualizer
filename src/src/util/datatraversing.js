
define(['jquery', 'src/data/structures'], function($, Structures) {

	var asyncId = 0;

	function _getValueFromJPath(element, jpath) {

		var el = getValueIfNeeded(element),
			type,
			jpathElement = jpath.shift();

		if(jpathElement) {
			if(el && (el = el[jpathElement]) !== false) {
				// Fetch the element and return the deferred.
				// However, we pipe the deferred with the recursive function
				return fetchElementIfNeeded(el).pipe(function(elChildren) {
					return _getValueFromJPath(elChildren, jpath);
				});
			} else
				return $.Deferred().reject();
		} else // Finally, jpathElement doesn't exist and we throw what's left
			return $.Deferred().resolve(element);
	}

	function _setValueFromJPath(element, jpath, newValue, moduleId, mute) {
		var el = getValueIfNeeded(element);
		var type;
		if(typeof el != "object" && jpath.length > 0)
			el = {};
		if(jpath.length == 1)
			return el[jpath[0]] = newValue;
		var jpathElement = jpath.shift();
		if(jpathElement) {
			if(!(subelement = el[jpathElement])) { // If not an object, we make it an object
				subelement = {};
				el[jpathElement] = subelement;
			}

			// Perhaps the subelement is set only by URL, in which case we have to set it.
			return fetchElementIfNeeded(subelement).pipe(function(elChildren) {
				return _setValueFromJPath(elChildren, jpath, newValue);
			}).done(function() {
				if(!mute)
					triggerDataChange(el, moduleId);
			});
		}
	}


	function getOptions(value) {
            return value ? (value._options ? value._options : {}) : {};
	}

	function getHighlights(value) {
            return value ? (value._highlight ? value._highlight : []) : [];
	}

	function getValueIfNeeded(element) {
		if(typeof element == "undefined")
			return;

		if(typeof element == "object" && element.url)
			return fetchElementIfNeeded(element).pipe(function(data) {
				return data.value;
			});
		if(element.value && element.type)
			return element.value;
		return element;
	}

	function fetchElementIfNeeded(element) {
		var deferred = $.Deferred();
		
		if(typeof element == "undefined" || element == null)
			return deferred.reject();
		var type = getType(element);
		if(element.url && element.type) {
			//var ajaxType = typeof Structures[type] == "object" ? 'json' : 'text';
			require(['src/util/urldata'], function(urlData) {
				
				urlData.get(element.url, false, element.timeout).then(function(data) {
					data = {type: type, value: data};
					deferred.resolve(data);
				}, function(data) {
					console.log('Fetching error');
				});
			});
			return deferred;
		}/* else if(element.value) {
			return deferred.resolve(element.value);
		} */else
			return deferred.resolve(element);
	}

	function getType(element) {
		if(element == undefined)
			return;
		var type = typeof element;
		if(type == 'object') {
			if(element instanceof Array)
				return "array";
			if(Structures[element.type] && (element.value || element.url))
				return element.type;
			
			if(typeof element.type == "undefined" || !element.value)
				return "object";
			else {
				console.error("Type " + element.type + " could not be found");
				return;
			}
		}
		// Native types: int, string, boolean
		return type;
	}

	function listenDataChange(data, callback, id) {
		if(!data.__onDataChanged)
			data.__onDataChanged = [];
		data.__onDataChanged.push([callback, id]);
	}

	function triggerDataChange(data, id) {
		if(data.__onDataChanged) {
			for(var i = 0, l = data.__onDataChanged.length; i < l; i++) {
				if((id !== undefined && data.__onDataChanged[i][1] !== id) || id === undefined) {
					data.__onDataChanged[i][0].call(data, data);	
				}
			}
		}
	}

	return {

		getType: getType,

		getValueIfNeeded: getValueIfNeeded,
		fetchElementIfNeeded: fetchElementIfNeeded,

		getValueFromJPath: function(element, jpath) {
			if(!jpath)
				return $.Deferred().resolve(element);
			if(!jpath.split)
				jpath = '';
			var jpathSplitted = jpath.split('.'); // Remove first element, which should always be "element"
			jpathSplitted.shift();
			return _getValueFromJPath(element, jpathSplitted);
		},

		setValueFromJPath: function(element, jpath, newValue, moduleId, mute) {
			if(!jpath.split)
				jpath = '';
			var jpathSplitted = jpath.split('.');
			jpathSplitted.shift();

			if(moduleId === true || moduleId === false) {
				mute = moduleId;
				moduleId = undefined;
			}
			
			return _setValueFromJPath(element, jpathSplitted, newValue, moduleId, mute);
		},

		getJPathsFromStructure: function(structure, title, jpathspool, jpathString) {
			
		 	if( ! structure ) {
				return;
		 	}

			var children = [], len, i;

			if( structure.elements ) {

				if( ! jpathString ) {
					
					jpathString = title = "element";
					
				} else {

					jpathString += "." + title;

				}

				jpathspool.push( {
					title: title,
					children: children,
					key: jpathString 
				} );

				switch( structure.type ) {

					case 'object':

						// The type is object (native). Then look for its children (structure.elements)
						for( i in structure.elements ) {

							this.getJPathsFromStructure(structure.elements[ i ], (i + ""), children, jpathString);

						}

					break;

					// It it's an array, look for the children
					case 'array':

						// Array which length is nown => Then it's an object type
						if(! ( structure.elements instanceof Array ) ) {
							structure.elements = [ structure.elements ];
						}
						
						// Look for how many elements to display
						len = Math.min( 5, structure.elements.length || 0 );
						
						// Can be overridden in the structure.
						if( structure.nbElements ) {
							len = structure.nbElements;
						}

						for( i = 0; i < len; i++ ) {
							this.getJPathsFromStructure(structure.elements[ i ] || structure.elements[ 0 ], (i + ""), children, jpathString);
						}
					break;
				}		
			} else {

				// Useful is { myProp: "chemical" } => will fetch the chemical structure
				if(typeof structure == "string" && typeof Structures[ structure ] == "object") {

					this.getJPathsFromStructure( Structures[ structure ], title, jpathspool, jpathString);

				} else {

					if( ! jpathString || jpathString == null ) {

						jpathString = title = "element";

					} else {

						jpathString += "." + title;
					}

					jpathspool.push( { 
						title: title,
						children: children,
						key: jpathString
					} );
				}
			}

		},


		getStructureFromElement: function(element) {
			
			var structure = {};
			var el = element;

			if(element === undefined || element === null)
				return;
				
			if(element.type && element.value)
				element = element.value;
			
			if(el !== false && el.type && Structures[el.type] && (element.value || element.url)) {

				structure = Structures[el.type];
			} else if(element instanceof Array) {

				structure.type = "array";
				structure.elements = [];
				var length = Math.min(5, element.length);
				for(var i = 0; i < length; i++) {
					var elementI = element[i];	
					structure.elements[i] = this.getStructureFromElement(elementI);
				}
			} else if(typeof element == "object") {
				structure.type = "object";	
				structure.elements = {};

				for(var i in element) 
					structure.elements[i] = this.getStructureFromElement(element[i]);
			} else if(el.type && el.value)
				structure = el.type;
			else
				return typeof el;

			return structure;
		},

		getJPathsFromElement: function(element, jpaths) {
			if(!jpaths)
				jpaths = [];
			jpaths.push({title: 'Not set', key: ''});
			if(element === undefined || element == null)
				return;
			// We know the dynamic structure
			// Apply to typed elements + to js objects
			if(element.structure)
				this.getJPathsFromStructure(element.structure, null, jpaths);	
			else if(element.type && Structures[element.type] && (element.value || element.url)) {
				this.getJPathsFromStructure(Structures[element.type], null, jpaths);
			} else {
				switch(typeof element) {
					default:
					case 'object':
						var structure = this.getStructureFromElement(element, structure);
						this.getJPathsFromStructure(structure, null, jpaths);

					break;
				}
			}
            return jpaths;
		},

		get: function( data ) {


			if( data && data.get ) {
				return data.get();
			}

			return data;
		},

		getHighlights: getHighlights,
		getOptions: getOptions,

		triggerDataChange: triggerDataChange,
		listenDataChange: listenDataChange
	}
});
