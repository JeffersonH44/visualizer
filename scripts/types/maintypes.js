
CI.DataType = {};

CI.DataType.asyncId = 0;

CI.DataType.Structures = {
	
	'object': "object",
	'mol2d': "string",
	'molfile2D': "string",
	'gif': "string" ,
	'picture': "string",
	'string': "string",
	'gif': "string",
	'jpg': "string",
	'jpeg': "string",
	'png': "string",
	'number': "number",
	'mf': 'string',
	'jcamp': "string",

	'boolean': "boolean",
	'arrayXY': {
		'type': 'array',
		'elements': ['number', 'number']
	},

	'matrix': {

		'type': 'object'

	},

	'fromTo': {
		'type': 'object',
		'elements': {
			'from': 'number',
			'to': 'number'
		}
	},


	'loading': {
		'type': 'object',
		'elements': {
			'title': 'string',
			'series': {
				'type': 'array',
				'nbElements': 6,
				'elements': {
					'type': 'object',
					'elements': {
						'label': 'string',
						'data': {
							'type': 'array',
							'elements': {
								'type': 'object',
								'elements': {
									'a': 'number',
									'c': 'string',
									'h': 'number',
									'info': 'object',
									'l': 'string',
									'u': 'string',
									'n': 'string',
									'o': 'number',
									'w': 'number',
									'x': 'number',
									'y': 'number'
								}
							}
						}
					}
				}
			}

		}
	},


	'gridSelector': {
		'type': 'object',
		'elements': {
			'categories': {
				'type': 'array',
				'elements': {
					'type': 'object',
					'elements': {
						'selectorType': 'string',
						'name': 'string',
						'label': 'string',
						'defaultValue': 'number',
						'defaultMaxValue': 'number',
						'defaultMinValue': 'number',
						'maxValue': 'number',
						'minValue': 'number'
					} 
				}
			},

			'variables': {
				'type': 'array',
				'elements': {
					'type': 'object',
					'elements': {
						'name': 'string',
						'label': 'strig'
					}
				}
			}
		}
	},

	'chart': {

		"type": "object",
		"elements": {
			"serieLabels": {
				"type": "array",
				"elements": "string"
			},


			"series": {
				"type": "array",
				"elements": {
					"type": "array",
					"elements": {
						"type": "object",
						"elements": {
							"value": "number",
						},
						"otherElementsPossible": true
					}
				}
			},

			"title": "string",
			"x": {
				"type": "array",
				"elements": "number"
			},

			"xAxis": {
				"type": "object",
				"elements": {
					"label": "string",
					"maxValue": "number",
					"minValue": "number"
				}
			},

			"yAxis": {
				"type": "object",
				"elements": {
					"label": "string"
				}
			}
		}
	},

	'chemical': {/*
		"type": "object",
		"elements": {

			"entry": {
				"type": "array",
				"elements": {*/
					
					"type": "object",
					"elements": {

						"_entryID": "int",
						"supplierName": "string",
						"iupac": {
							"type": "array",
							'nbElements': 2,
							"elements": {
								"type": "object",
								"elements": {
									"value": "string",
									"language": "string"	
								}
							}
						},
						
						"mf": {
							"type": "array",
							'nbElements': 2,
							"elements": {
								"type": "object",
								"elements": {
									"value": "mf",
									"mw": "int",
									"exactMass": "int" 
								}
							}
						},
						
						"mol": {
							"type": "array",
							'nbElements': 2,
							"elements": {
								"type": "object",
								"elements": {
									"value": "molfile2D",
									"gif": "gif"
								}
							}
						},
						
						"rn": {
							"type": "array",
							'nbElements': 2,
							"elements": {
								"type": "object",
								"elements": {
									"value": "int"
								}
							}
						},
						"bachID": "string",
						"catalogID": "string",
						"entryDetails": "chemicalDetails"
					}
			/*	}
			}
		}*/
	},
	
	"chemicalDetails": {
		"type": "object",
		"elements": {
			"_entryID": "int",
			"supplierName": "string",
			"iupac": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"value": "string",
						"language": "string"	
					}
				}
			},
			
			"mf": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"value": "mf",
						"mw": "int",
						"exactMass": "int" 
					}
				}
			},
			
			"mol": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"value": "molfile2D",
						"gif": "gif"
					}
				}
			},
			
			"rn": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"value": "int"
					}
				}
			},
			
			"bachID": "string",
			"catalogID": "string",
			
			"bp": {
				
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"pressure": "number",
						"high": "number",
						"low": "number"
					}
				}
				
			},
			
			"mp": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"pressure": "number",
						"high": "number",
						"low": "number"
					}
				}
				
			},
			
			"rn": {
				
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"value": "number"
					}
				}
				
			},
			
			"density": {
				
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"high": "number",
						"low": "number",
						"temperature": "number",
					}
				}
				
			},
			
			"mol3d": {
				"type": "array",
				"elements": "molfile3d"
			},
			
			"ir": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"conditions": "string",
						"solvent": "string",
						"jcamp": "jcamp",
						"view": {
							"type": "object",
							"elements": {
								"description": "string",
								"value": "string",
								"url": "string",
								"pdf": "string"
							}
						}
						
					}
					
				}
				
			},
			
			
			"nmr": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"pressure": "string",
						"solvent": "string",
						"experiment": "string",
						"frequency": "number",
						"nucleus": "string",
						"temperature": "string",
						"jcamp": "jcamp",
						"view": {
							"type": "object",
							"elements": {
								"description": "string",
								"value": "string",
								"url": "string",
								"pdf": "string"
							}
						}
						
					}
					
				}
				
			},
			
			
			
			"mass": {
				"type": "array",
				"elements": {
					"type": "object",
					"elements": {
						"experiment": "string",
						"jcamp": "jcamp"
					}
					
				}
				
			}
			
		}
	}
};


/* Returns the type of an element */
CI.DataType.getType = function(element) {
	
	if(element == undefined)
		return;
		
	var type = typeof element;

	if(type == 'object') {
		if(element instanceof Array)
			return "array";
		if(typeof element.type == "undefined")
			return "object";
		else if(CI.DataType.Structures[element.type])
			return element.type;
		else
			return console.error("Type " + element.type + " could not be found")
	}
	

	// Native types: int, string, boolean
	return type;
}

/*
CI.DataType.SubElements = {
	
	"chemical": {
		"Molecular formula": { "type": "mf", "jpath": "mf.0.value" },
		"Molecular mass": { "type": "int", "jpath": "mf.0.mw" }
	}
}
*/	

CI.DataType.getValueIfNeeded = function(element) {
	if(element.value && element.type)
		return element.value;
	if(element.url && element.type) {
		element.value = undefined;
		return element.value;
	}
	
	return element;
}

CI.DataType.fetchElementIfNeeded = function(element) {
	
	if(element === undefined || element == null)
		return $.Deferred().resolve("");
	
	var type = element.type, ajaxType, def;
	if(!element.value && element.url) {
			
		ajaxType = typeof CI.DataType.Structures[type] == "object" ? 'json' : 'text';
		
		return $.Deferred(function(dfd) {

			$.ajax({
				url: element.url,
				dataType: ajaxType,
				type: "get",
				timeout: 120000,

				success: function(data, text, jqxhr) {
					element.value = data;
					dfd.resolve(element);
				},

				complete: function() {

				},

				error: function() {

				}
			});


		});
		
	} else {

		def = $.Deferred()
		return def.resolve(element);
	}
	
	return false;
}


CI.DataType.getValueFromJPath = function(element, jpath, wholeObject) {
	
	if(!jpath.split)
		jpath = '';
		
	var jpath2 = jpath.split('.');
	jpath2.shift();

	return CI.DataType._getValueFromJPath(element, jpath2);
}

CI.DataType._getValueFromJPath = function(element, jpath) {
	var el = CI.DataType.getValueIfNeeded(element);
	var type;
	var jpath2 = jpath;
	var jpathElement = jpath2.shift();

	if(jpathElement) {
		if(el = el[jpathElement]) {
			return CI.DataType.fetchElementIfNeeded(el).pipe(function(elChildren) {
				
				return CI.DataType._getValueFromJPath(elChildren, jpath2);
			});
		} else
			return $.Deferred().resolve('');
	} else 
		return $.Deferred().resolve(element);
}




CI.DataType.setValueFromJPath = function(element, jpath, newValue) {
	
	if(!jpath.split)
		jpath = '';
	var jpath2 = jpath.split('.');
	jpath2.shift();
	return CI.DataType._setValueFromJPath(element, jpath2, newValue);
}

CI.DataType._setValueFromJPath = function(element, jpath, newValue) {
	var el = CI.DataType.getValueIfNeeded(element);
	var type;
	var jpath2 = jpath;

	if(jpath2.length == 1)
		return element[jpath2[0]] = newValue;

	var jpathElement = jpath2.shift();
	if(jpathElement) {
		el = el[jpathElement];
		return CI.DataType.fetchElementIfNeeded(el).pipe(function(elChildren) {
				return CI.DataType._setValueFromJPath(elChildren, jpath2, newValue);
		});
	}
}


CI.DataType.getJPathsFromStructure = function(structure, title, jpathspool, keystr) {
 
 	if(!structure)
		return;

	var children = [];
		
	if(structure.elements) {
		
			
		if(!keystr || keystr == null) {
			keystr = "element";
			title = keystr;
		} else
			keystr = keystr + "." + title;
					
		jpathspool.push({ title: title, children: children, key: keystr });
	
		switch(structure.type) {
			
			case 'object':
				
				for(var i in structure.elements) {
					CI.DataType.getJPathsFromStructure(structure.elements[i], i + "", children, keystr);
				}
				
			break;
			
			case 'array':
				
				// Array which length is nown
				if(!(structure.elements instanceof Array))
					structure.elements = [structure.elements];
				var len = structure.elements.length;
				if(structure.nbElements)
					len = structure.nbElements;

				for(var i = 0; i < len; i++)
					CI.DataType.getJPathsFromStructure(structure.elements[i] || structure.elements[0], i + "", children, keystr);
			break;
		}		
	} else {
		
		// Pretyped structures
		// Like chemical: "chemical"
		if(typeof CI.DataType.Structures[structure] == "object") {
			
			CI.DataType.getJPathsFromStructure(CI.DataType.Structures[structure], title, jpathspool, keystr);
			
			
		} else {
			
			
					
			if(!keystr || keystr == null) {
				keystr = "element";
				title = keystr;
			} else
				keystr = keystr + "." + title;
				
				
			jpathspool.push({ title: title, children: children, key: keystr });
	
		}
	}
}


CI.DataType.getStructureFromElement = function(element) {
	
	var structure = {};
	var el = element;
	if(element === undefined)
		return;
		
	if(element.type) 
		element = element.value;
	
	if(el !== false && el.type && CI.DataType.Structures[el.type]) {
		structure = CI.DataType.Structures[el.type];
	} else if(element instanceof Array) {
		
		structure.type = "array";
		structure.elements = [];
		//structure.isFolder = true;
		/*
		if(typeof element != "object")
			structure.elements = typeof element;
		else
			CI.DataType.getStructureFromElement(element, structure.elements);
		*/
		var length = Math.min(5, element.length);
		for(var i = 0; i < length; i++) {
			var elementI = element[i];	
			structure.elements[i] = CI.DataType.getStructureFromElement(elementI);
		}
		
	} else if(typeof element == "object") {
		
		
		structure.type = "object";	
		//structure.isFolder = true;
		structure.elements = {};
		for(var i in element) 
			structure.elements[i] = CI.DataType.getStructureFromElement(element[i]);
	} 
	else if(el.type)
		structure = el.type;
	else
		return typeof el;
		
	return structure;
	
}

CI.DataType.getJPathsFromElement = function(element, jpaths) {
	
	
	if(!jpaths)
		var jpaths = [];
	
	jpaths.push({title: 'Not set', key: ''});

	if(element === undefined)
		return;
	

	// We know the dynamic structure
	// Apply to typed elements + to js objects


	if(element.structure)
		CI.DataType.getJPathsFromStructure(element.structure, null, jpaths);	
	else if(element.type && CI.DataType.Structures[element.type]) {
		CI.DataType.getJPathsFromStructure(CI.DataType.Structures[element.type], null, jpaths);

	} else {
		
		switch(typeof element) {

			default:
			case 'object':
				var structure = CI.DataType.getStructureFromElement(element, structure);

				CI.DataType.getJPathsFromStructure(structure, null, jpaths);
			break;
			/*
			default:
				return;
			break;*/
		}
	}

	//console.log(jpaths);


	/*
	// Typed element
	if(element.type && element.value) {
		
		var type = element.type;
		// We know the structure
		if(element.structure) {
			
	
	*/
}





CI.DataType._doFetchElementHTMLCallback = function(element, box, asyncId, jpath) {

	CI.DataType.getValueFromJPath(element, jpath).done(function(data) {
		CI.DataType._toScreen(data, box).done(function(val) {
			$("#" + asyncId).html(val);
		});
	});

}


CI.DataType.asyncToScreenAttribute = function(source, attribute, jpath, element) {
		
	var def = $.Deferred();
	var _class = "callback-load-attr-";
	_class += ++CI.DataType.asyncId;
	
	var def = CI.DataType.getValueFromJPath(source, jpath).done(function(value) {

			if(attribute == 'style.backgroundColor') {
				$("." + _class).css('background-color', value);
			} else {
				if(element)
					element.attr(attribute, value);
				else
					$("." + _class).attr(attribute, value);
			}
		});

	def._class = _class;
	if(source.type && !source.value && source.url) {
		return def;
	} else
		return def;
}


CI.DataType.asyncToScreenHtml = function(element, box, jpath) {
	
	var asyncId = 'callback-load-' + (++CI.DataType.asyncId);
	var html = "";
		html += '<span id="';
		html += asyncId;
		html += '" class="loading">Loading...</span>';

	// Needs fetching
	/*if(!element.value && element.url) {
		CI.DataType._doFetchElementHTMLCallback(element, box, 'callback-load-' + CI.DataType.asyncId, jpath);
		var def = $.Deferred.resolve(html);
	} else*/
		// returns element.value if fetched

	var def = CI.DataType.getValueFromJPath(element, jpath).pipe(function(data) { var el = CI.DataType._toScreen(data, box).done(function(el) { $("#" + asyncId).html(el); CI.Util.ResolveDOMDeferred($("#" + asyncId)); }); return el; });
	def.html = html;
	def.id = asyncId;
	return def; 	
}


CI.DataType._toScreen = function(element, box, opts) {
	var slice = Array.prototype.slice;
	
	var dif = $.Deferred();

	CI.DataType.fetchElementIfNeeded(element).done(function(data) { CI.DataType._valueToScreen(dif, data, box, opts); });
	return dif.promise();
}
CI.DataType.toScreen = CI.DataType._toScreen;

CI.DataType.getOptions = function(value) {
	return value._options || {};
}

CI.DataType.getHighlights = function(value) {
	return value._highlight || [];
}


CI.DataType._valueToScreen = function(def, data, box, args) {

	var repoFuncs = box.view.typeToScreen;
	var type = CI.DataType.getType(data);

	args = $.extend(args, CI.DataType.getOptions(data))
	var highlights = CI.DataType.getHighlights(data);

	if(typeof repoFuncs[type] == 'function')
		return repoFuncs[type].call(box.view, def, data, args, highlights, box);
	
	if(CI.Type[type] && typeof CI.Type[type].toScreen == 'function')
		return CI.Type[type].toScreen(def, data, args, highlights, box);
}

CI.Type = {};

CI.Type["string"] = {
	toScreen: function(def, val) { def.resolve(val); }
};

CI.Type["matrix"] = {
	toScreen: function(def, val) { def.resolve(val); }
};
	
CI.Type["number"] = {		
	toScreen: function(def, val) { def.resolve(val); }
};

CI.Type["chemical"] = {

	getIUPAC: function(def, source) {
		CI.DataType.getValueFromJPath(source, "element.iupac.0.value").done(def.resolve);
	},
	
	toScreen: function(def, val) {
		CI.Type["chemical"].getIUPAC(def, val);
	}
};
	


CI.Type["picture"] = {		
	
	toScreen: function(def, val) {

		def.resolve('<img src="' + CI.DataType.getValueIfNeeded(val) + '" />');
	}
};
	




CI.Type["mol2d"] = {		
	
	toScreen: function(def, molfile, options, highlights, box) {


		var id = BI.Util.getNextUniqueId();
		CI.Util.DOMDeferred.progress(function(dom) {
			
			if($("#" + id, dom).length == 0)
				return;

			var canvas = new ChemDoodle.ViewerCanvas(id, 100, 100);

			canvas.specs.backgroundColor = "transparent";
			canvas.specs.bonds_width_2D = .6;
			canvas.specs.bonds_saturationWidth_2D = .18;
			canvas.specs.bonds_hashSpacing_2D = 2.5;
			canvas.specs.atoms_font_size_2D = 10;
			canvas.specs.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
			canvas.specs.atoms_displayTerminalCarbonLabels_2D = true;

			var molLoaded = ChemDoodle.readMOL(molfile.value);
			molLoaded.scaleToAverageBondLength(14.4);
			canvas.loadMolecule(molLoaded);

//console.log(molfile._highlight);
			CI.RepoHighlight.listen(molfile._highlight, function(value, commonKeys) {

				if($("#" + id, dom).length == 0)
					return;

				var commonKeys2 = {};
				var atoms;

				// commonkeys: ['A', 'B'];
				for(var i = commonKeys.length - 1; i >= 0; i--) {
					atoms = molfile._atoms[commonKeys[i]]; // [0, 1, 15, 12]
					if(!atoms)
						continue;

					for(var j = atoms.length - 1; j >= 0; j--) {

						molLoaded.atoms[atoms[j]].isHover = value;
					}
				}

				for(var i = 0; i < molLoaded.atoms.length; i++) {
					canvas._domcanvas.width = canvas._domcanvas.width; // Erase canvas
					molLoaded.atoms[i].drawChildExtras = true;
				}

				canvas.repaint();

			}, true, box.id || 0);


		});

		def.resolve('<canvas id="' + id + '"></canvas>');
	}
};
CI.Type["molfile2D"] = CI.Type.mol2d;
	




CI.Type["mol3d"] = {		
	
	toScreen: function(def, molfile) {


		var id = BI.Util.getNextUniqueId();
		CI.Util.DOMDeferred.progress(function(dom) {

			if($("#" + id, dom).length == 0)
				return;

			var mg = new ChemDoodle.MolGrabberCanvas3D(id, 600, 400);
			mg.specs.projectionWidthHeightRatio_3D = 600 / 400;
			mg.specs.set3DRepresentation('Stick');
			mg.setSearchTerm('penicillin');
			mg.handle = null;
			mg.timeout = 15;
			mg.startAnimation = ChemDoodle._AnimatorCanvas.prototype.startAnimation;
			mg.stopAnimation = ChemDoodle._AnimatorCanvas.prototype.stopAnimation;
			//mg.isRunning = ChemDoodle._AnimatorCanvas.prototype.isRunning;
			mg.dblclick = ChemDoodle.RotatorCanvas.prototype.dblclick;
			mg.nextFrame = function(delta){
				var matrix = [];
				mat4.identity(matrix);
				var change = delta/1000;
			        var increment = Math.PI/15;
				mat4.rotate(matrix, increment*change, [ 1, 0, 0 ]);
				mat4.rotate(matrix, increment*change, [ 0, 1, 0 ]);
				mat4.rotate(matrix, increment*change, [ 0, 0, 1 ]);
				mat4.multiply(this.rotationMatrix, matrix);
			}
			
			mg.startAnimation();
		});

		def.resolve('<canvas id="' + id + '"></canvas>');
	}
};
	




CI.Type["jcamp"] = {

	_id: 0,
	cache: [],

	doFromDom: function(dom, value, opts, highlights, box) {
		var spectra;
		if(dom.length == 0)
			return;

		function hexToRgb(hex) {
		    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		    return result ? {
		        r: parseInt(result[1], 16),
		        g: parseInt(result[2], 16),
		        b: parseInt(result[3], 16)
		    } : null;
		}

		if(!dom.data('spectra')) {

			var spectra = new ChemDoodle.OverlayCanvas(dom.attr('id'), opts.width || 300, opts.height || 150);
			spectra.CIOnRepaint(function() {
				var h = [], zones = dom.data('zones'), all = dom.data('allspectras');
				
				if(spectra._highlights) {

					for(var i in spectra._highlights) {
						if(spectra._highlights[i] == 1) {

 							for(var j in zones) {
 								if(zones[j][i])
									h.push({zone: zones[j][i], color: all[j].plots_color });
							}
						}
					}
				}

				var mem = this.spectrum.memory;
				var context = this._domcanvas.getContext('2d');
				for(var i = 0, l = h.length; i < l; i++) {
					var x1 = this.spectrum.getTransformedX(h[i].zone[0], {}, mem.width, mem.offsetLeft);
					var x2 = this.spectrum.getTransformedX(h[i].zone[1], {}, mem.width, mem.offsetLeft);
				    context.beginPath();
				    context.rect(x1, 0, x2 - x1, mem.height);
				    var color = hexToRgb(h[i].color);

				    if(color == null || color.r == 0 && color.g == 0 && color.b == 0)
				    	color = {r: 222, g: 205,  b: 59};
				    context.fillStyle = "rgba(" + color.r + ", " + color.g + ", " + color.b + ", 0.5)";
				 	context.fill();
				}
			});

			spectra.CIOnMouseMove(function(e) {
				var zones = dom.data('zones');
				spectra._highlights = spectra._highlights || {};
				var mem = this.spectrum.memory;
				var x = e.offsetX;
				var x1 = this.spectrum.getInverseTransformedX(x);
				var min, max, j = 0;

				for(var k in zones) {
					for(var i in zones[k]) {
						min = Math.min(zones[k][i][0], zones[k][i][1]);
						max = Math.max(zones[k][i][0], zones[k][i][1]);

						if(min < x1 && max > x1) {

							if(!spectra._highlights[i]) {
								CI.RepoHighlight.set(i, 1);
							}

						} else if(spectra._highlights[i] == 1) {
							CI.RepoHighlight.set(i, 0);
						}
					}
				}
			});
			 

			dom.data('spectra', spectra);
			spectra.specs.plots_showYAxis = true;
			//spectra.specs.plots_flipXAxis = false;
			if(!opts) opts = {};
				
			spectra.specs.plots_flipXAxis =  opts.flipX || false;
			spectra.specs.plots_flipYAxis =  opts.flipY || false;
		//	spectra.specs.plots_color = opts.plotcolor || 'black';

		} else {
			spectra = dom.data('spectra');
		}

		// THIS PART IS SPECIFIC TO THE JCAMP
		var spectraid = opts.spectraid;

		if(!dom.data('allspectras'))
			dom.data('allspectras', {});



		if(!dom.data('zones'))
			dom.data('zones', {});

		if(!dom.data('allspectrasid'))
			dom.data('allspectrasid', {});

		var allspectras = dom.data('allspectras');
		var allspectrasid = dom.data('allspectrasid');
		var allzones = dom.data('zones');

/*		if(value._cacheId && CI.Type.jcamp.cache[value._cacheId]) {
			allspectras[spectraid] = CI.Type.jcamp.cache[value._cacheId];

		} else {*/
			allspectras[spectraid] = ChemDoodle.readJCAMP(value.value);
			CI.Type.jcamp.cache.push(allspectras[spectraid]);
			value._cacheId = CI.Type.jcamp._id;
			CI.Type.jcamp._id++;

			if(CI.Type.jcamp.cache.length == 100) {
				CI.Type.jcamp.cache.splice(0, 1);
				CI.Type.jcamp._id--;
			}
	//	}
		
		allspectras[spectraid].plots_color = opts.plotcolor;
  		allspectras[spectraid].continuous = opts.continuous || false;

		if(allspectrasid[spectraid] == undefined) {
	  		var id = spectra.addSpectrum(allspectras[spectraid]);
			allspectrasid[spectraid] = id;
			spectra.getXMaxBound();
			spectra.repaint();
		} else if(allspectrasid[spectraid] == -1) {
			spectra.loadSpectrum(allspectras[spectraid]);
			spectra.getXMaxBound();
			spectra.repaint();
			CI.RepoHighlight.kill(box.id + "_"  + spectraid)
		} else {
			spectra.overlaySpectra[allspectrasid[spectraid]] = allspectras[spectraid];
			CI.RepoHighlight.kill(box.id + "_"  + spectraid)
		}

		allzones[spectraid] = value._zones;


		CI.RepoHighlight.listen(highlights, function(value, commonKeys) {
			spectra._highlights = spectra._highlights || {};
			for(var i = 0; i < commonKeys.length; i++) 
				spectra._highlights[commonKeys[i]] = value;
			spectra.repaint();
		}, true, box.id + "_"  + spectraid);



  		//spectra.repaint();
	},

	onKill: function() {

	},

	toScreen: function(def, value, args, highlights, box) {
		
		if(args.dom)
			return def.resolve(CI.Type.jcamp.doFromDom(args.dom, value, args, highlights, box));

		var id = BI.Util.getNextUniqueId();
		CI.Util.DOMDeferred.progress(function(dom) { CI.Type.jcamp.doFromDom($("#" + id, dom), value, args, highlights, box); });
		def.resolve('<canvas id="' + id + '"></canvas>');
	}
};

CI.Type["mf"] = {
	toScreen: function(def, value) {
		return def.resolve(CI.DataType.getValueIfNeeded(value).replace(/\[([0-9]+)/g,"[<sup>$1</sup>").replace(/([a-zA-Z)])([0-9]+)/g,"$1<sub>$2</sub>").replace(/\(([0-9+-]+)\)/g,"<sup>$1</sup>"));
	}
};



CI.Type["chart"] = {
	toScreen: function(def, value) {

		
	}
};

CI.Type["boolean"] = {
	toScreen: function(def, value) {
		if(value)
			def.resolve('<span style="color: green;">&#10004;</span>');
		else
			def.resolve('<span style="color: red;">&#10008;</span>');
	}
};

CI.Type.gif = CI.Type.picture;
CI.Type.jpeg = CI.Type.picture;
CI.Type.jpg = CI.Type.picture;
CI.Type.png = CI.Type.picture;
