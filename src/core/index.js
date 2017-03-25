/**
 *
 * @public
 * @namespace core
 * @description Holds the different core modules.
 *
 */

import Events from "./events/events";
import * as Storage from './storage';
import App_Router from "./router/router";
import Component from "./component/component";
import Scrollmap from "./scrollmap/scrollmap";
import App_Build from "./app/app";
import $ from './dom/dom';

export {
	Events,
	Storage,
	Component,
	App_Router,
	Scrollmap,
	App_Build,
	$
};