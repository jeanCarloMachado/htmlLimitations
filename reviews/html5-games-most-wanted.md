HTTML5 Games most wanted
2012

The negative aspects of canvas are that performance varies across
platforms and animation functionality isn't built in.

WebGl is based on OpenGl ES 2.0. It's hardware accelerated (fast)
and allows for some pretty complex visual effects. The negative
aspects are that it is complicated to learn and isn't supported by
Internet Exploer yet.

The limitation of the HTML5 audio element is that it's purpose is
really to play single audio files, like background music within a
game.

If the visuals and audio are amazing but the game play is boring,
a player will stop playing. The substance of the game is the
mechanics, so don't invest too much effort in the aesthetics
unless it plays and integral role in the core of the game.

... HTML5 as a buzzword describes more than just the next version
of HTML: it includes new HTML5 tags, new (JavaScript) APIs like
canvas, video, audio, geolocation, drag and drop, and more.

[CSS] you can express broad, general styles that "cascade" to many
elements, and then override these for any specific elements, as
necessary.

A CSS stylesheet is structured as a set of rules. A CSS rule has
two main parts: a selector and one or more declarations. A
declaration is composed of a property and a value.

[transition] It allows us to perform an animation between two
given states.

To use CSS transitions, like in a state machine, we need to
identify states and actions. States are CSS selectors and actions
are changes made between these CSS selectors.

CSS Transitions allow us to make degradable  games because CSS
interpreters are nice; if they meet unknown properties, they
simply ignore them and keep working.

[transforms] allows elements to be translated, rotated, scaled and
skewed in two-dimensional space.

Web usage is huge, but creating dynamic and real-time games is not
the primary purpose of the web.

Avoiding text selection in games is important.

#Pure DOM Vs. canvas-based game

Both solutions are viable, but do not cover the same needs. The
solution depends on the game type.

Choosing this solution [canvas] means reducing the usage of CSS
and HTML, so everything these technologies gives us now has to be
implemented in JavaScript.

Although JavaScript performance has been remarkably improved, it
is generally less efficient to make JavaScript animations than to
use CSS transitions and animations, which can be more optimized
and hardware accelerated.

For now, pure DOM approach is usually better because it takes more
advantage of web technologies.

Web developers are open-minded and have developed open-source
libraries and frameworks all around the web.

Allowing the user to be creative and to bring his own style into
the game is the most valuable feature you can offer. Now, if you
also let him or her to share her score - you scored.

The good thing with HTML- and JavaScript-based applications is
that the technology itself forces you into some kind of structure.

[sound api] it's fine if you want to play some music, but if
you're triggering sounds as you play a game, it's patchy.

Everything seems very easy at first, but it's for sure that it
will turn into more code  than you originally expected.


A particle is represented by a point in space, a dot. In practise
particles are often useful for simulating effects that consist of
many small objects.

Numeric errors lead to a special NaN value. All operations with a
NaN as operand will result in another NaN. This can make it very
difficult to track down the source of errors.

Performance optimizations depend on the runtime environment.
Optimizations that have a positive impact today can become
useless, or even harmful, tomorrow. Pag 131

A good tool to perform this [micro optimizations] is found at jsfiddle.net.
The more advanced engines become, the less important these micro
optimizations will become.

Version 1.0 of the WebGL specification was completed in March 2011
by Khronos Group.

WebGL is a very new emerging technology. As such, unfortunately,
not every computer supports it. In order to view a WebGl progam,
you need a new browser, a newer graphics card, an Operating
System.

OpenGL ES is a subset of OpenGL and is built for use in embedded
devices like mobile phones, which have lower processing power and
fewer capabilities than a desktop computer.

To use WebGL you need a browser that supports WebGL and a graphics
card and  operating system that are new enough to support OpenGL.

As your skill level improves, you will find that moving more
functionality to the shader can improve perfomance and offer a
wide range of cool effects and realism.


WebGL-inspector let's you see the state of your buffers, texture
information, individual frames, and other useful data.

It's a good idea to use the newer browser method,
window.requestAnimationFrame, because it will not animate a scene
when you are in another browser tab. This also means that extra
battery life will not be needlessly wasted on mobile devices.

When creating a geme, you should plan what you whish to accomplish
and how to implement it (at a high level) before you write any
code.

WebGL is a port of the OpenGL ES API to the web browser. It allows
Javascript code to directly display and manipulate 3D scenes of an
HML5 canvas embedded in a web page.

Using requestAnimationFrame() is currently the recommended method
of making animation in HTML5.

One can only hope that as browser technology progress and WebGL
becomes more robustly supported, the guarantees on frame rate will
become more robust as well.

As for the genre, it can pose stringent requirements to an engine
part. FPS games call for short ping times, whereas an RPG may
require large cache.

The crucial and most complicated stage of develpment, which is
choosing the technology.

JSGameBench, designed to analyze the performance of various
technologies in different browsers.

##Notes

Firefox and Chrome came up with distinct API's for audio
manipulation.

The author recommends reading Ralph Koster's *A theory of fun for
game design*.

Recommends Pro HTML5 and CSS3 Design Patterns by Michael Bowers

Checkout the #bbg channel on freenode.

