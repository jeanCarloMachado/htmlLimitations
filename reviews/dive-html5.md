#Dive into HTML5
#Mark Pilgrim

##Quotes

The idea that the best way to fix HTML is to replace it with something
else still pops up from time to time.

Most of the successful versions of HTML have been "retro-specs",
catching up to the world while simultaneously trying to nudge it in th
right direction.

HTML has never been pure, and all attempt to purify it have been
spectacular failures, matched only by the attempts to replace it.

The one's that win are the one's that ship.

By some estimates, over 99% of HTML pages on the web today have at least
one error in them.

The canvas API grew over time, and the text functions we're added late in
the game. Some browsers shipped with canvas support before the text API
was complete. Page 39

Because it's just a markup instead of a script, the behaviour will
be consistent across all websites.

The HTML 4 errata document lists four outright errors in HTML 4
specification.

Canvas is a rectangle in your page where you can use JavaScript to
draw anything you want. The canvas is a two dimensional grid. Pag
113.

###Video

... "AVI" and "MP4" are just container formats. Just  like a  ZIP
file can contain any sort of file within it... pg 142

###History api

Title can be any string. This parameter is currently unused by
major browsers. If you want to set the page title, you should
store it in the state argument and set it manually in your
popstate callback.

##Notes

Content sniffing (ignoring of mime types by browser on circumstances)

This work lists features of HTML5 with nice and detailed methods of
checking HTML5 features support pg 35.

Mention a solution for Video: Video for Everybody!

Some things (as geolocation) are different specifications but are
treated as the HTML5 as well. Others we're splited from the HTML5
strictly speaking, but are treated once again as HTML5 (as the
data storage api).

Gears is an open source browser plugin from Goggle that provide
API's (as geolocation to older browsers).

Much of the detection of features is done via JavaScript, this
forces developers to do at least some set of the markup on
javascript, it may be a limitation factor for the generalized use
of HTML5.

Placeholders is an HTML5 feature.

The http meta encoding header overwrites the html meta one.

There is no canvas 3D, but many vendors tried to specify their
API's pg. 111.

When you "watch a video", your video player is doing at least
three things at once:

1. Interpreting the container format to find out which video and
   audio tracks are available, and how they are stored within the
   file so that it can find the data it needs to decode next
2. Decoding the video steam and displaying a series of images on
   the screen
3. Decoding the audio stream and sending the sound to your
   speakers

The word "codec" is a portmanteau, a combination of the words
"coder" and "decoder".

Most videos don't actually change all that much from one frame to
the next, so this allows for high compression rates, which results
in smaller file sizes.

Audio codecs are algorithms by which an audio stream is encoded.

...there is an entire category of audio codecs optimized for
encoding speech.

...due to lack of support in both native browsers and third-party
plugins, speech-optimized audio codecs never really took off on
the web.

The MP3 standard doesn't define exactly how to encode MP3
(although if does define exactly how to decode them).

...HTML5 includes a <video> element for embedding video in a web
page. There are no restriction on the video codec, audio codec, or
container format you can use for your video. One <video> element
can link to multiple video files, and the browser will choose the
first video file it can actually play.

A year from now, the landscape will look significantly different
as WebM is implemented in multiple browsers, those browsers ship
non-experimental WebM enabled versions, and users upgrade to those
versions.

There is no single combination of containers and codecs that works
in all HTML5 browsers.

HTML5 specifies that all elements (other than <source> elements)
that are children of a <video> element must be ignored altogether.
That allows you to use HTML5 in newer browsers and fall back to
Flash gracefully in older browsers, without requiring any fancy
JavaScript hacks.

There is more than one way to figure out where you are - your IP
address, our wireless network connection, which cell tower your
phone is talking to, or dedicated GPS hardware that calculates
latitude and longitude from information sent by satellites in the
sky.

While we're on the subject of legacy platforms, I should point out
that many older mobile phone platforms had their own
device-specific geolocation API's.

Persistent local storage is one fo the areas where native client
applications have held an advantage over web applications.

In 2007, Google launched Gears, an open source browser plugin
aimed at providing additional capabilities in browsers.

(about web sql) ...all interested implementors have used the same
SQL backend (Sqlite), but we need multiple independent
implementations to proceed along a standardisation path. Until
another implementor is interested in implementing this spec, the
description of the SQL dialect has been left as simply a reference
to Sqlite, which isn't acceptable for a standard.

At it's simplest, an off-line web application is a list of URLs -
HTML, CSS, JavaScript, images or any other kind of resource

...this is web development we're talking about. Nothing ever just
works.

(wen off-line downloading fails) Your browser will fire the error
event, but there is no indication of what the actual problem was.
This cam make debugging off-line web applications even more
frustrating than usual.

There are over 100 elements in HTML5.

###Video
Container formats

- MPEG4
- Flash Video
- Ogg (for video Theora), (audio Vorbis)
- WebM
- Matroska
- Audio Video Interleave

####Video Codecs

- H.264, is one of the video codecs mandated by the Blue-Ray specification.
- Theora, native in Linux, 
- VP8 royality free from Google

####Audio Codecs

- MP3 - not patent free
- ACC: advanced audio coding, is patent encumbered
- Vorbis - patent free
