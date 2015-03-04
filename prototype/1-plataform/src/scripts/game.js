
window.addEventListener('load', function() {

    var Q = window.Q = Quintus({development:true})
    .include('Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio')
    .include('ActionPlatformerPlayer, ActionPlatformerEnemy')
    .enableSound()
    .setup({
        width: 640,
        height: 360,
        scaleToFit: true
    }).controls().touch();

    Q.setImageSmoothing(false);

    //define scene
    Q.scene('level', function(stage) {

        var player;
        //load tmx
        Q.stageTMX('level1.tmx', stage);

        player = Q('player').first();


        stage.add('viewport').follow(player, {x: true, y: true});

        //Q.audio.play('background.mp3',{ loop: true });

    });

    //load assets
    Q.loadTMX('level1.tmx, player.json, monsters.json, player.png, nazgul.png, nazgul.json, enemy-attacked.mp3, jump.mp3, player-death.mp3, background.mp3', function() {
        //merge metadata with data
        Q.compileSheets('player.png', 'player.json');
        Q.compileSheets('orc.png', 'monsters.json');
        Q.compileSheets('nazgul.png', 'nazgul.json');
        Q.stageScene('level');
    });

});
