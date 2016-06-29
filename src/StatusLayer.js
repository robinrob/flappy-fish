var StatusLayer = cc.Layer.extend({
    labelCoin:null,
    labelMeter:null,
    coins:0,

    ctor:function () {
        cc.log("StatusLayer.ctor. ...")
        this._super();
        this.init();
    },

    init:function () {
        cc.log("StatusLayer.init ...")
        this._super();

        var winsize = cc.director.getWinSize();

        this.labelCoin = new cc.LabelTTF("Coins:0", "Helvetica", 20);
        this.labelCoin.setColor(rss.colors.white);
        this.labelCoin.setPosition(cc.p(70, rss.center().y - 80));
        this.addChild(this.labelCoin);

        this.labelMeter = new cc.LabelTTF("0m", "Helvetica", 20);
        this.labelMeter.setColor(rss.colors.white);
        this.labelMeter.setPosition(cc.p(420, rss.center().y - 80));
        this.addChild(this.labelMeter);
    },

    updateMeter:function (px) {
        cc.log("StatusLayer.updateMeter ...")
        this.labelMeter.setString(parseInt(px / 10) + "m");
    },

    addCoin:function (num) {
        cc.log("StatusLayer.addCoin ...")
        this.coins += num;
        this.labelCoin.setString("Coins:" + this.coins);
    }
});
