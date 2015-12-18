When you "watch a video", your video player is doing at least
three things at once:

1. Interpreting the container format to find out which video and
   audio tracks are available, and how they are stored within the
   file so that it can find the data it needs to decode next
2. Decoding the video steam and displaying a series of images on
   the screen
3. Decoding the audio stream and sending the sound to your
   speakers

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

HTML5 specifies that all elements (other than <source> elements)
that are children of a <video> element must be ignored altogether.
That allows you to use HTML5 in newer browsers and fall back to
Flash gracefully in older browsers, without requiring any fancy
JavaScript hacks.

