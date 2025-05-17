# domino-cg-a4

## A4 - Domino Toppling Animation

The objective of this assignment is to simulate a domino toppling animation, with dominos
using the U-turn and Split arrangements shown in Figure 4.  
For some fascinating (and very advanced) demonstrations, see YouTube channel of @Hevesh5
https://www.youtube.com/channel/UCxJsQFhb8PFjtuN5gdOV6-w

<table>
    <tr>
        <td>
            <img src="http://www.domino-play.com/TopplingTurn.jpg">
        </td>
        <td>
            <img src="http://www.domino-play.com/TopplingSplit.jpg"> 
        </td>
    <tr>
    <tr>
        <td colspan=2>Figure 4: Domino Toppling with a turn and a split.</td>
    </tr>
</table>

Image courtesy: http://www.domino-play.com/TopplingBasic.htm  

We will attempt something less ambitious and more achievable!  
The animation to be designed comprises N toppling steps (N >= 3), where each step is one
toppling sequence. The trigger for the toppling should be a ball rolling till it hits the starting
domino of the next step (which then moves), or an object dropping till it hits a lever (which
then rotates and topples the starting domino of the next step). At least one turn and one split
(Figure 4) must be implemented. The remaining could be straight arrangements (Figure 2) to
simplify the animations.

### Task 1: Model and Scene Graph
You can use any geometry, including simple spheres, cylinders, and cuboids, as the
moving/rolling objects, and any combination of mechanisms/arrangements. Use textures and
lighting/shading models from A3 to color the objects.
Use a scene graph to model the objects in the scene, and especially to manage dependencies
between objects. At least one step in the animation should involve the motion of one object
constrained by (relative to) the motion of a second object. And this should be modeled as a
dependency in the scene graph.
### Task 2: Animation including Collision Detection
Implement each animation step in 3 parts:
1. animation of one or more objects - rolling, falling, etc. The motion may be constrained
by other objects (e.g. a ball rolling down a face of a box)
2. detection of collision with another object
3. reaction to the collision - on the first object and on the second, which then executes
step 1 above
4. A fallen domino must be rendered of a different shade of the same color to give the
effects seen in elaborate domino arrangements (ref. YouTube channel).
### Task 3: Dynamic Lights & Camera
The scene is lit by a set of 3 lights:
- a point source at a fixed location and illuminating the entire scene
- a directional spotlight fixed at a certain height on one side of the scene and lighting the
middle of the scene
- a moving spotlight that follows the object that is currently moving (the focus of the
animation at that point). This spotlight is at a fixed location but points toward the
moving object
Each of these lights can be toggled on or off. Use different colors for each of the lights, so that
their effect is visible.

The scene can be viewed through one of 2 cameras:
1. A camera located above the scene, and can be rotated about the scene using a trackball
mechanism
2. A camera that is fixed a certain small distance above one of the moving objects and
follows the (translation) motion of the object. The camera can be rotated about a
vertical axis through user commands.
3. Controls allow switching between the camera modes.

---

## Camera Controls

1. **Orbital Camera (Default)**: A camera located above the scene that can be rotated using trackball mechanism.
   - Left-click drag to rotate
   - Right-click drag to pan
   - Scroll to zoom

2. **Follow Camera**: A camera fixed a small distance above one of the moving objects that follows its translation motion.
   - The camera follows the active object (either the rolling sphere or the most recently toppling domino)
   - Use A/D or Left/Right Arrow keys to rotate around the vertical axis

### Switching Between Cameras
- Press the 'C' key to toggle between the Orbital Camera and Follow Camera

