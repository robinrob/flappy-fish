var MenuLayer = cc.Layer.extend({
    ctor : function(){
        cc.log("MenuLayer.ctor ...")
        //1. call super class's ctor function
        this._super();
    },
    init:function(){
        cc.log("MenuLayer.init ...")
        //call super class's super function
        this._super();

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //4. create a background image and set it's position at the center of the screen
        var spritebg = new cc.Sprite(res.helloBG_png);
        spritebg.setPosition(rss.center());
        this.addChild(spritebg);

        //5.
        cc.MenuItemFont.setFontSize(60);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(rss.center());
        this.addChild(menu);

        //cc.audioEngine.preloadMusic(res.music_background);
        //cc.audioEngine.preloadEffect(res.music_jump);
        //cc.audioEngine.preloadEffect(res.music_pickup_coin);
    },

    onPlay : function(){
        cc.log("MenuLayer.onPlay ...")
        cc.director.runScene(new PlayScene());
    }
});