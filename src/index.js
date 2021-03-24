import './styles.css';
import config from '../app.config.json';
import htmlData from '../public/index.html';
import * as scFn from '../events.config';

// Add HTML file
config.content = htmlData;

// Add SkyCiv event functions
config.onInit = scFn.onInit;
config.onFirstOpen = scFn.onFirstOpen;
config.resizeableFunction = scFn.resizeableFunction;
config.onSoftwareUpdate = scFn.onSoftwareUpdate;
config.beforeShow = scFn.beforeShow;
config.aferShow = scFn.aferShow;
config.beforeHide = scFn.beforeHide;
config.aferHide = scFn.aferHide;

jQuery(document).ready(function () {
	// console.log is overwritten in S3D so assign console.info so logging is still available.
	console.log = console.info;

	// This puts the app into SKYCIV_APPS.[appId]
	new SKYCIV_APPS.create(config);

	// Bind new functions if you'd like to access them via the console.
	// SKYCIV_APPS[config.id].customFunction = myImportedFunction;

	// Initialize
	SKYCIV_APPS[config.id].init();
});
