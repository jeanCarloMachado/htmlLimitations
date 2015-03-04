
Quintus.ActionPlatformerPlayer = function (Q) {
    this.lastFlipX = false;
    this.lastHeight = 0;
    this.dead = false;



    Q.Sprite.extend('player', {
        init: function(p) {
            this._super(p, {
                sheet: 'player',
                jumpSpeed: -550,
                speed: 250,
                isJumping: false
            });
            this.add('2d, platformerControls');


            this.on('jump', function(){
                if (!this.p.isJumping && this.p.vy < 0) {
                    this.p.isJumping = true;
                    Q.audio.play('jump.mp3');
                }
            });

            this.on('bump.bottom', function(){
                this.p.isJumping = false;
            });
        },

         //last step difference  == dt
        step: function(dt) {

            if (this.p.vx > 0) {
                this.p.flip = false;
            } else if(this.p.vx < 0) {
                this.p.flip = 'x';
            }

       },

       die:  function()
       {
            Q.audio.play('player-death.mp3');
            Q.stageScene('level');
       }
    });
};