var Rock = cc.Node.extend({
    space:null,
    sprite:null,
    shape:null,
    _map:0,// which map belong to

    get map() {
        return this._map;
    },
    set map(newMap) {
        this._map = newMap;
    },

    /** Constructor
     * @param {cc.SpriteBatchNode *}
     * @param {cp.Space *}
     * @param {cc.p}
     */
    ctor:function (spriteSheet, space, posX) {
        cc.log("Rock.ctor ...")
        this._super()

        this.space = space;

        this.sprite = new cc.PhysicsSprite("#rock.png");
        var body = new cp.StaticBody();
        body.setPos(cc.p(posX, this.sprite.getContentSize().height / 2 + g_groundHeight));
        this.sprite.setBody(body);

        this.shape = new cp.BoxShape(body,
            this.sprite.getContentSize().width,
            this.sprite.getContentSize().height);
        this.shape.setCollisionType(SpriteTag.rock);

        this.space.addStaticShape(this.shape);
        spriteSheet.addChild(this.sprite);
    },

    removeFromParent:function () {
        cc.log("Rock.removeFromParent ...")
        this.space.removeShape(this.shape);
        this.shape = null;
        this.sprite.removeFromParent();
        this.sprite = null;
    },

    getShape:function () {
        cc.log("Rock.getShape ...")
        return this.shape;
    }
});