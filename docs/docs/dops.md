---
title: "Dops"
---

<houdini-example title="Attribute Transfer and Position" author="mestela" file="attribute_transfer_position.hip">
  Transfer the position of sphere to the points of a grid, with a smooth falloff.

  1. Create grid
  1. Create sphere
  1. Create attribute transfer node
  1. Wire grid into first input, sphere into second
  1. Enable 'Match P Attribute'
  1. On second tab set the distance low (say 0.1) and blend width up (say 2.0) to get a blendy warp like the soup version.

  A few things to take note of here (or come back to later after you've tried a few more examples) :

  * P is the standard attribute for position, usually point position. In maya you'd say this are the vertex positions. While in maya you rarely modify these directly (usually you stay one level higher and manipulate object transforms). In houdini, all the fun stuff is down here, getting messy, pushing points around.
  * This setup reads the position of the sphere, and transfers it to each point on the grid, with falloff. If you had no falloff, the entire grid would disappear to a single point at the center of the sphere. (In fact you see this happen before you modify the distance and blend with parameters).
  * 'But hang on, you said we're basically manipulating verticies, how come this setup magically reads the transform of the sphere? And shouldn't the grid verts be warping to all the verts on the sphere surface?' Good questions. The answers are that a default houdini sphere (called a primitive sphere) isn't like a maya nurbs or poly sphere. It's more like a single maya particle rendered in sphere mode; ie it has position and scale, but no verts that make up the surface. Knowing that, this setup makes a little more sense. In maya-speak, we're reading a single particle (that we visualise as a sphere), read its position, compare to each vertex in a grid, and warp those verts towards the particle if they're too close.
  * Yes houdini has regular poly and nurbs spheres too, look in the 'primitive type' dropdown of the sphere SOP.
  * The 'match P attribute' is required because usually people don't want this; they'll be transferring colour, or some other attribute, but they don't want the points to actually move.

</houdini-example>

<houdini-example title="Attribute Transfer and Colour" author="mestela" file="attribute_transfer_color_and_position.hip">
  Same as before, just type 'Cd' in the list of transferred attributes. If you want more than one attribute transferred, separate them with a space. Eg, you want to transfer colour, normal, and pscale, you'd type "Cd N pscale".

  I added a colour node to the grid to make it red, another to make the sphere green, so you can see what's going on.

  Why 'Cd'? Houdini uses a lot of naming conventions derived from prman. Cd is 'colour diffuse'. 'P' is position, 'N' is normal, and so on.

  [List](http://www.sidefx.com/docs/houdini14.0/model/attributes#idm140573562786112) of recognised houdini attributes (the amount surprised me, I use maybe 10% of these).

  [List](http://renderman.pixar.com/view/shader-global-variables-tables) of renderman SL variables for comparison.

</houdini-example>
