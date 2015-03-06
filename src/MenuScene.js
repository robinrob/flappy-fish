var MenuScene = cc.Scene.extend({
    onEnter:function () {
        cc.log("MenuScene.onEnter ...")
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});