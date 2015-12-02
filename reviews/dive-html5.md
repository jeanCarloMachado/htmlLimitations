Some things (as geolocation) are different specifications but are treated as the HTML5 as well. Others we're splited from the HTML5
strictly speaking, but are treated once again as HTML5 (as the
data storage api).

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

