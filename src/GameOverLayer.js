var GameOverLayer = cc.LayerColor.extend({
    // constructor
    ctor:function () {
        cc.log("GameOver.ctor ...")
        this._super();
        this.init();
    },

    init:function () {
        cc.log("GameOver.init ...")
        this._super(cc.color(0, 0, 0, 180));

        cc.MenuItemFont.setFontSize(30);
        var menuItemRestart = new cc.MenuItemSprite(
            new cc.Sprite(res.restart_n_png),
            new cc.Sprite(res.restart_s_png),
            this.onRestart, this);
        var menu = new cc.Menu(menuItemRestart);
        menu.setPosition(rss.center());
        this.addChild(menu);
    },

    onRestart:function () {
        cc.log("GameOver.onRestart ...")
        cc.director.resume();
        cc.director.runScene(new PlayScene());
    }
});