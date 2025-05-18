import { Pane } from "tweakpane";
import type { App } from "../app";
import $ from 'jquery';

export function setupControls(
    app: App,
) {
    const pane = new Pane({
        title: "controls",
        container: $("#controls")[0],
    });
    const startButton = pane.addButton({
        title: "start",
    });
    startButton.on('click', (_ev) => {
        app.sphere?.roll();
        startButton.disabled = true;
    });
    const settings = {
        "point light": true,
        "spot light": true,
        "tracking light": true,
        "helpers": false,
        "shading": "phong",  // Default to Phong shading
        "texture": false     // Default to no texture
    };
    const pointLtBinding = pane.addBinding(settings, 'point light');
    pointLtBinding.on('change', (_e) => {
        app.lightingManager.togglePointLight();
    });
    const spotLtBinding = pane.addBinding(settings, 'spot light');
    spotLtBinding.on('change', (_e) => {
        app.lightingManager.toggleSpotLight();
    });
    const trackingLtBinding = pane.addBinding(settings, 'tracking light');
    trackingLtBinding.on('change', (_e) => {
        app.lightingManager.toggleTrackingSpotlight();
    });
    const helpersBinding = pane.addBinding(settings, 'helpers');
    helpersBinding.on('change', (_e) => {
        app.lightingManager.toggleHelpers();
    });
    
    // Add shading model dropdown
    const shadingBinding = pane.addBinding(settings, 'shading', {
        options: {
            'Gouraud': 'gouraud',
            'Phong': 'phong'
        }
    });
    shadingBinding.on('change', (e) => {
        app.toggleShadingModel(e.value);
    });
    
    // Add texture toggle
    const textureBinding = pane.addBinding(settings, 'texture');
    textureBinding.on('change', (_e) => {
        app.toggleTexture();
    });
}