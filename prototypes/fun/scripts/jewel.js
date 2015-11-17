var jewel = (function() {
    var scriptQueue = [],
        numResourcesLoaded = 0,
        numResources = 0,
        executeRunning = false;

    function executeScriptQueue() {
        var  next = scriptQueue[0],
            first, script;

        if (next && next.loaded) {
            executeRunning = true;
            scriptQueue.shift();
            first = document.getElementsByTagName('script')[0];

            script = document.createElement("script");
            script.onload = function() {
                if (next.callback) {
                    next.callback()
                }
                executeScriptQueue();
            };
            script.src = next.src;
            first.parentNode.insertBefore(script, first);
        } else {
            executeRunning = false;
        }
    }

    function load(src, callback) {
        var image, queueEntry;
        numresources++;

        queueEntry = {
            src: src,
            callback: callback,
            loaded: false,
        };
        scriptQueue.push(queueEntry);

        image = new Image();
        image.onload = image.onerror = function() {
            numResourcesLoaded++;
            queueEntry.loaded = true; 

            if (!executeRunning) {
                executeScriptQueue();
            }
        };
        img.src = src;

    }

    function setup() {

    }

    return {
        load: load,
        setup: setup,
    }
})();
