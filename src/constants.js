var rss = rss || {};

rss.chipmunk = "chipmunk"
rss.box2D = "box2d"

rss.twoPI = 2 * Math.PI

rss.res = {
    spritesheet_plist: "res/spritesheet.plist",
    spritesheet_png: "res/spritesheet.png"
}

// Resources for pre-loading
rss.resources = [];
for (var i in rss.res) {
    rss.resources.push(rss.res[i]);
}

rss.colors = {
    yellow: new cc.color(255, 255, 0, 255),
    green: new cc.color(0, 255, 0, 255),
    purple: new cc.color(174, 0, 255, 255),
    red: new cc.color(255, 0, 0, 255),
    pink: new cc.color(255, 0, 255, 255),
    orange: new cc.color(255, 78, 0, 255),
    maroon: new cc.color(172, 6, 84, 255),
    brown: new cc.color(145, 58, 6, 255),
    blue: new cc.color(6, 87, 234, 255),
    black: new cc.color(0, 0, 0, 255),
    white: new cc.color(255, 255, 255, 255)
}