/**
 *
 * @public
 * @namespace core
 * @description Holds the different core modules.
 *
 */

import Events from "./events/events";
import HTTP from "./http/http";
import * as Storage from './storage';
import Router from "./router/router";
import Component from "./component/component";
import Scrollmap from "./scrollmap/scrollmap";
import App from "./app/app";
import Module from "./module/module";

export {
	Events,
	HTTP,
	Storage,
	Component,
	Router,
	Scrollmap,
	App,
	Module
};