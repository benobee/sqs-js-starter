/*
 * @description: turn a tagged template literal into a 
 * DOM element. 
 * @namespace: 'Component' - Create an object called Component
 * which returns to be appended to the DOM as needed, as well as 
 * store the object in the core component list array
*/

import Template from './template';

let Component = {};

/* 
 * return component as DOM element with inner
 * HTML injected into the first element in the string 
*/

const List = [];

Component = (strings, ...exp) => {
	/*create new template from string*/
	const taggedLiteral = new Template(strings, ...exp);

	/* push return object to component list */
	List.push(taggedLiteral);

	/* return the DOM element to be appended */
	return taggedLiteral.root;
};

Component.list = List; //append all elements to root component in core

/*
 * method for appending nodes which is contained
 * within the parent 'Component' object
*/

Component.render = (element, target) => {
	if (target) {
		target.appendChild(element);
	} else {
		console.error("COMPONENT ERROR: Needs to be a valid DOM element.");
	}
};

export default Component;
