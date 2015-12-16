#How browsers work landscape

##Quotes

The DOM has an almost one to one relation to the markup.

The error handling is quite consistent in browsers but amazingly
enough it's not part of HTML current specification.

Webkit uses Flex and Bison parser generators to create parsers
automatically from the CSS grammar files. ... Firefox uses a
top down parser written manually.

HTML5 adds an option to mark the script as asynchronous so it will
be parsed and executed by a different thread.

... scripts asking for style information during the document parsing
stage. If the style is not loaded and parsed yet, the script will
get wrong answers and apparently this caused lots of problems.
