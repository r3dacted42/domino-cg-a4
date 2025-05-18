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
    
    // Create a folder for camera controls
    const cameraFolder = pane.addFolder({
        title: 'Camera Controls',
        expanded: true,
    });
    
    const settings = {
        "point light": true,
        "spot light": true,
        "tracking light": true,
        "helpers": false,
        "shading": "phong",  // Default to Phong shading
        "texture": false,    // Default to no texture
        "camera": "top view", // Default to top view camera
        "rotate left": () => {},
        "rotate right": () => {},
    };
    
    // Camera type toggle (previously 'c' key)
    const cameraBinding = cameraFolder.addBinding(settings, 'camera', {
        options: {
            'Top View': 'top view',
            'Follow Camera': 'follow'
        }
    });
    cameraBinding.on('change', (_e) => {
        app.toggleCamera();
    });
    
    // Camera rotation buttons (previously a/d or arrow keys)
    const rotateLeftBtn = cameraFolder.addButton({
        title: 'Rotate Anti-Clockwise',
    });
    rotateLeftBtn.on('click', () => {
        if (app.isFollowCameraActive) {
            app.followCamera.rotateHorizontal(0.1);
        }
    });
    
    const rotateRightBtn = cameraFolder.addButton({
        title: 'Rotate Clockwise',
    });
    rotateRightBtn.on('click', () => {
        if (app.isFollowCameraActive) {
            app.followCamera.rotateHorizontal(-0.1);
        }
    });
    
    // Create a folder for lighting controls
    const lightingFolder = pane.addFolder({
        title: 'Lighting Controls',
        expanded: true,
    });
    
    const pointLtBinding = lightingFolder.addBinding(settings, 'point light');
    pointLtBinding.on('change', (_e) => {
        app.lightingManager.togglePointLight();
    });
    const spotLtBinding = lightingFolder.addBinding(settings, 'spot light');
    spotLtBinding.on('change', (_e) => {
        app.lightingManager.toggleSpotLight();
    });
    const trackingLtBinding = lightingFolder.addBinding(settings, 'tracking light');
    trackingLtBinding.on('change', (_e) => {
        app.lightingManager.toggleTrackingSpotlight();
    });
    const helpersBinding = lightingFolder.addBinding(settings, 'helpers');
    helpersBinding.on('change', (_e) => {
        app.lightingManager.toggleHelpers();
    });
    
    // Create a folder for rendering controls
    const renderingFolder = pane.addFolder({
        title: 'Rendering Controls',
        expanded: true,
    });
    
    // Add shading model dropdown
    const shadingBinding = renderingFolder.addBinding(settings, 'shading', {
        options: {
            'Gouraud': 'gouraud',
            'Phong': 'phong'
        }
    });
    shadingBinding.on('change', (e) => {
        app.toggleShadingModel(e.value);
    });
    
    // Add texture toggle (previously 't' key)
    const textureBinding = renderingFolder.addBinding(settings, 'texture');
    textureBinding.on('change', (_e) => {
        app.toggleTexture();
    });
}