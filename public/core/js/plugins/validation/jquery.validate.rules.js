"use strict";
$(function () {
	
var rules = [];
    rules["language"] = function(value, element) {
        var isValid = value.match(/([nl]|[en]|[fr])/)
        return isValid;
	};
    rules["path"] = function(value, element) {
		if ( element.value.match(/(\{|\}|\=|\&|\#|\%|\^|\@|\*)/)  ) { 
			return false; 
		} else if ( element.value === "" ) { 
			return false; 
		} else if ( element.value.match(/\/$/) ){ 
			return true; 
		} else {
			return false; 
		}
	};
	for (var key in rules) {
		$.validator.addMethod(key, rules[key]);
	}
});
