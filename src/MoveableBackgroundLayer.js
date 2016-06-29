var MoveableBackgroundLayer = cc.Layer.extend({
    ctor: function (bgSprite, speed) {
        cc.log("BackgroundLayer.ctor ...")
        this.r = {}
        this._super();

        this.r.bgSprite = bgSprite
        this.r.speed = speed
    },

    init: function () {
        cc.log("BackgroundLayer.init ...")
        this._super()

        //create the background image and position it at the center of screen
        this.spriteBG1 = cc.Sprite.create(this.r.bgSprite)
        this.spriteBG1.setPosition(cc.p(
            rss.center().x,
            rss.center().y
        ))
        this.addChild(this.spriteBG1, 0);

        this.spriteBG2 = cc.Sprite.create(this.r.bgSprite)
        this.spriteBG2.setPosition(cc.p(
            rss.center().x + this.spriteBG1.width - 1,
            rss.center().y
        ))
        this.addChild(this.spriteBG2, 0);
    },

    update: function(dt) {
        var movement = this.speed * dt
        var width = this.spriteBG1.width
        var left = rss.p.subX(rss.center(), width)

        var pos1 = this.spriteBG1.getPosition()
        var newX1 = pos1.x - movement

        var pos2 = this.spriteBG2.getPosition()
        var newX2 = pos2.x - movement

        if (newX1 < left.x) {
            this.spriteBG1.setPosition(rss.p.addX(pos2, width - movement - 1))
        } else {
            this.spriteBG1.setPosition(rss.p.subX(pos1, movement))
        }

        if (newX2 < left.x) {
            this.spriteBG2.setPosition(rss.p.addX(pos1, width - movement - 1))
        } else {
            this.spriteBG2.setPosition(rss.p.subX(pos2, movement))
        }
    }
})