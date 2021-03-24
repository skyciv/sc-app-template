/*
    These functions will be invoked when certain events occur.
    Point each of these functions to your custom event handler function.
    See onInit as an example.
*/

import { onAppLaunch } from './src/app';

export async function onInit() {
	// Runs when the page loads the app.
	onAppLaunch();
}

export async function resizeableFunction() {
	// Runs when the app window is resized.
}

export async function onFirstOpen() {
	// Runs when the app is open for the first time.
}

export async function onSoftwareUpdate() {
	// Function to run after changes are made to your model in S3D.
	// E.g.Bill of Materials App re - calculates cost when a member is added / deleted.
}

export async function beforeShow() {
	// Before the app is shown, run this function.
}

export async function aferShow() {
	// After the app is shown, run this function.
}

export async function beforeHide() {
	// Before the app is hidden, run this function.
}

export async function aferHide() {
	// After the app is hidden, run this function.
}
