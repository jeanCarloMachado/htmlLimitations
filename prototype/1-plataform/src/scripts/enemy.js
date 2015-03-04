
Quintus.ActionPlatformerEnemy = function(Q) {

    Q.component('CommonEnemy',{

        added: function() {
            var entity = this.entity;
            entity.on('bump.left, bump.right, bump.bottom', function (collision){
                if (collision.obj.isA('player')) {


                    collision.obj.die();
                }
            });

            entity.on('bump.top', function(collision) {

                //kill a enemy
                if (collision.obj.isA('player')) {
                    collision.obj.p.vy = -100;

                    Q.audio.play('enemy-attacked.mp3');

                    this.destroy();
                }

            });
        }

    });

    Q.Sprite.extend('GroundEnemy', {
        init: function(p) {
            this._super(p, {vx: -50, defaultDirection: 'left'});
            this.add('2d, aiBounce, CommonEnemy');
        },

        //last step difference  == dt
        step: function(dt) {
            //direction = (+/-) velocity
            var dirX = this.p.vx / Math.abs(this.p.vx);

            var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
            var nextElement  = Q.stage().locate(this.p.x + dirX * this.p.w/2 + dirX, this.p.y + this.p.h/2 + 1, Q.SPRITE_DEFAULT);
            var nextTile;

            if (nextElement instanceof Q.TileLayer) {
                nextTile = true;
            }

            // if the next element is not a tile
            // and the enemy is on the ground flip
            // the direction
            if (!nextTile && ground) {

                if (this.p.vx > 0) {

                    if (this.p.defaultDirection == 'right') {
                        this.p.flip = 'x';
                    } else {
                        this.p.flip = false;
                    }
                } else {
                    if (this.p.defaultDirection == 'left') {
                        this.p.flip = 'x';
                    } else {
                        this.p.flip = false;
                    }
                }

                this.p.vx = -this.p.vx;
            }
        }
    });

    Q.Sprite.extend('VerticalEnemy', {
        init: function(p) {
           this._super(p, {vy: -100, rangeY: 70, gravity: 0});
           this.add('2d, CommonEnemy');

           this.p.initialY = this.p.y;
           this.p.initialVy = this.p.vy;
           this.p.vyDirection = this.p.vy/Math.abs(this.p.vy);

           this.on('bump.top, bump.bottom', function(collision) {
                this.p.vy = -Math.abs(this.p.initialVy) * this.p.vyDirection;
                this.p.vyDirection = this.p.vy/Math.abs(this.p.vy);
           });
        },

        step: function(dt) {
            if (this.p.y - this.p.initialY >= this.p.rangeY && this.p.vy > 0) {
                this.p.vy = -this.p.vy;
                this.p.vyDirection = -1;
            } else if ( - this.p.y + this.p.initialY >= this.p.rangeY && this.p.vy < 0) {
                this.p.vy = -this.p.vy;
                this.p.vyDirection *= -1;
            }
        }
    });
};