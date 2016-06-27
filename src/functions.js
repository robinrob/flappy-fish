var rss = rss || {}

cp.Space.prototype.addConstraints = function(constraints) {
    var that = this
    constraints.forEach(function(constr) {
        that.addConstraint(constr)
    })
}

cc.Node.prototype.seq = function() {
    var action = arguments.length > 1 ? cc.Sequence.create.apply(cc.Sequence, arguments) : arguments[0]
    this.runAction(action)
    return action
}

cc.Node.prototype.spawn = function(x, y) {
    var action = cc.Spawn.create.apply(cc.Spawn, arguments)
    this.runAction(action)
    return action
}

cp.Vect.prototype.toP = function() {
    return cc.p(this.x, this.y)
}

cp.Vect.prototype.addX = function(dx) {
    return cp.v(this.x + dx, this.y)
}

cp.Vect.prototype.addY = function(dy) {
    return cp.v(this.x, this.y + dy)
}

cp.Vect.prototype.subX = function(dx) {
    return cp.v(this.x - dx, this.y)
}

cp.Vect.prototype.subY = function(dy) {
    return cp.v(this.x, this.y - dy)
}

rss.console = function(str){
    console.log(str)
}

rss.consoleO = function(obj) {
    for (i in obj) {
        rss.console(i)
    }
}

rss.logO = function(obj) {
    for (i in obj) {
        cc.log(i)
    }
}

rss.logP = function(p, name) {
    if (!name) {
        var name = "point"
    }
    cc.log(name + ".x: " + p.x)
    cc.log(name + ".y: " + p.y)
}

rss.logS = function(s) {
    if (!name) {
        var name = "size"
    }
    cc.log(name + ".width: " + s.width)
    cc.log(name + ".height: " + s.height)
}

rss.logDeg = function(rad, name) {
    if (!name) {
        var name = "angle"
    }
    cc.log(name + " (deg): " + cc.radiansToDegrees(rad))
}

rss.toV = function(p) {
    return cp.v(p.x, p.y)
}

rss.v = {}

rss.vertsToPs = function(verts, offset) {
    offset = offset || cc.p()
    var vertPs = []
    for (var i = 0; i < verts.length - 1; i+=2) {
        vertPs.push(cc.p(verts[i] + offset.x, verts[i+1] + offset.y))
    }
    return vertPs
}

rss.offsetVerts = function(verts1, offset) {
    var verts = []
    verts1.forEach(function(v) {
        verts.push(cc.p(v.x + offset.x, v.y + offset.y))
    })
    return verts
}

rss.sum = function(obj) {
    var total = 0
    for (var i in obj) {
        total += obj[i]
    }
    return total
}

rss.sumAttr = function(attr, items) {
    var sum = 0
    items.forEach(function(item) {
        sum += item[attr]
    })
    return sum
}

rss.sign = function(number) {
    return number?number<0?-1:1:0
}

rss.p = {}
rss.p.add = function(p1, p2) {
    return cc.p(p1.x + p2.x, p1.y + p2.y)
}

rss.p.addX = function(obj, dx) {
    return cc.p(obj.x + dx, obj.y)
}

rss.p.addY = function(obj, dy) {
    return cc.p(obj.x, obj.y + dy)
}

rss.p.sub = function(p1, p2) {
    return cc.p(p1.x - p2.x, p1.y - p2.y)
}

rss.p.subX = function(obj, dx) {
    return cc.p(obj.x - dx, obj.y)
}

rss.p.subY = function(obj, dy) {
    return cc.p(obj.x, obj.y - dy)
}

rss.p.mult = function(p, m) {
    return cc.p(p.x * m, p.y * m)
}

rss.p.dot = function(p1, p2) {
   return cc.p(p1.x * p2.x, p1.y * p2.y)
}

rss.p.toS = function(p) {
    return cc.size(p.x, p.y)
}

rss.s = {}
rss.s.mult = function(s, m) {
    return cc.size(s.width * m, s.height * m)
}

rss.s.addW = function(s, dw) {
    return cc.size(s.width + dw, s.height)
}

rss.s.addH = function(s, dh) {
    return cc.size(s.width, s.height + dh)
}

rss.s.subW = function(s, dw) {
    return cc.size(s.width - dw, s.height)
}

rss.s.subH = function(s, dh) {
    return cc.size(s.width, s.height - dh)
}

rss.s.dot = function(s1, s2) {
    return cc.size(s1.width * s2.width, s1.height * s2.height)
}

rss.s.toP = function(s) {
    return cc.p(s.width, s.height)
}

rss.vecFromTo = function(a, b) {
    return rss.p.sub(b, a)
}

rss.unitVecFromTo = function(a, b) {
    return rss.normalize(rss.p.sub(b, a))
}

rss.normalVecTo = function(v) {
    return cc.p(-1 * v.y, v.x)
}

rss.rotate = function(v, angle) {
    return cc.p(
        v.x * Math.cos(angle) - v.y * Math.sin(angle),
        v.x * Math.sin(angle) + v.y * Math.cos(angle)
    )
}

rss.rotate90 = function(v) {
    return cc.p(-1 * v.y, v.x)
}

rss.rotate180 = function(v) {
    return cc.p(-1 * v.x, -1 * v.y)
}

rss.rotate270 = function(v) {
    return cc.p(v.y, -1 * v.x)
}

rss.allPs = function(points, func, args) {
    var newps = []
    points.forEach(function(p) {
        newps.push(func(p, args))
    })
    return newps
}

rss.rotateAll = function(points, angle) {
    var newps = []
    points.forEach(function(p) {
        newps.push(rss.rotate(p, angle))
    })
    return newps
}

rss.p.addAll = function(points, vector) {
    var newps = []
    points.forEach(function(point) {
        newps.push(rss.p.add(point, vector))
    })
    return newps
}

rss.distance = function(p1, p2) {
    return rss.mag({x: p2.x - p1.x, y: p2.y - p1.y})
}

rss.mag = function(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2))
}

rss.normalize = function(vec) {
    return cc.p(vec.x / rss.mag(vec), vec.y / rss.mag(vec))
}

rss.unitVec = function(vec) {
    return cc.p(vec.x / rss.mag(vec), vec.y / rss.mag(vec))
}

rss.toRad = function(deg) {
    return cc.degreesToRadians(deg)
}

rss.toDeg = function(rad) {
    return cc.radiansToDegrees(rad)
}

rss.polarXProj = function(r, theta) {
    return r * Math.cos(theta)
}

rss.polarYProj = function(r, theta) {
    return r * Math.sin(theta)
}

rss.polarToCartesian = function(r, theta) {
    return cc.p(rss.polarXProj(r, theta), rss.polarYProj(r, theta))
}

// Haven't tested
rss.cartesianToPolar = function(x, y) {
    var theta = Math.atan(y / x)
    var radius = Math.sqrt(x * x + y * y)

    return cc.p(radius, theta)
}

rss.pinJoint = function(obj1, obj2) {
    return [new cp.PinJoint(obj1.getBody(), obj2.getBody(), rss.toV(obj1.getJointP()), rss.toV(obj2.getJointP()))]
}

rss.pivotJoint = function(obj1, obj2) {
    return [new cp.PivotJoint(obj1.getBody(), obj2.getBody(), obj1.getJointP(true))]
}

rss.gearJoint = function(obj1, obj2, phase, ratio) {
    return [new cp.GearJoint(obj1.getBody(), obj2.getBody(), phase, ratio)]
}

rss.slideJoint = function(obj1, obj2) {
    return [new cp.SlideJoint(obj1.getBody(), obj2.getBody(), obj1.getJointPs()[0], obj1.getJointPs()[1], obj2.getJointP())]
}

rss.grooveJoint = function(obj1, obj2) {
    return [new cp.GrooveJoint(obj1.getBody(), obj2.getBody(), obj1.getJointPs()[0], obj1.getJointPs()[1], obj2.getJointP())]
}

rss.ratchetJoint = function(obj1, obj2, offset, phase) {
    return [new cp.RatchetJoint(obj1.getBody(), obj2.getBody(), offset, phase)]
}

rss.fixedJoint = function(obj1, obj2, angle) {
    var angle = angle || 0.0
    return rss.gearJoint(obj1, obj2, angle, 1.0).concat(rss.pivotJoint(obj1, obj2))
}

rss.rotaryLimitJoint = function(obj1, obj2, angle1, angle2) {
    return [new cp.RotaryLimitJoint(obj1.getBody(), obj2.getBody(), angle1, angle2)]
}

rss.winsize = function() { return cc.director.getWinSize() }

rss.width = function() { return cc.director.getWinSize().width }

rss.height = function() { return cc.director.getWinSize().height }

rss.top = function() { return cc.p(cc.director.getWinSize().width / 2, cc.director.getWinSize().height) }

rss.bottom = function() { return cc.p(cc.director.getWinSize().width / 2, 0) }

rss.left = function() { return cc.p(0, cc.director.getWinSize().height / 2) }

rss.right = function() { return cc.p(cc.director.getWinSize().width, cc.director.getWinSize().height / 2) }

rss.center = function() { return cc.p(cc.director.getWinSize().width / 2, cc.director.getWinSize().height / 2) }

rss.topLeft = function() { return cc.p(0, cc.director.getWinSize().height) }

rss.topRight = function() { return cc.p(cc.director.getWinSize().width, cc.director.getWinSize().height) }

rss.bottomLeft = function() { return cc.p(0, 0) }

rss.bottomRight = function() { return cc.p(0, cc.director.getWinSize().height) }


/* Control inputs */
rss.pauseInput = function() {
    return rss.keys[cc.KEY.p]
}

rss.restartInput = function() {
    return rss.keys[cc.KEY.r]
}

rss.upInput = function() {
    return rss.keys[cc.KEY.w] || rss.keys[cc.KEY.up]
}

rss.downInput = function() {
    return rss.keys[cc.KEY.s] || rss.keys[cc.KEY.down]
}

rss.rightInput = function() {
    return rss.keys[cc.KEY.d] || rss.keys[cc.KEY.right]
}

rss.leftInput = function() {
    return rss.keys[cc.KEY.a] || rss.keys[cc.KEY.left]
}

rss.xInput = function() {
    return this.r.rightInput() || this.r.leftInput()
}

rss.yInput = function() {
    return this.upInput() || this.downInput()
}

rss.xyInput = function() {
    return this.upInput() || this.downInput() || this.r.rightInput() || this.r.leftInput()
}

rss.setAlpha = function(col, alpha) {
    return cc.color(col.r, col.g, col.b, alpha)
}

rss.squareVerts = function(width) {
    return rss.rectVerts(width, width)
}

rss.rectVerts = function(width, height) {
    return [
        cc.p(+width / 2, -height / 2),
        cc.p(+width / 2, +height / 2),
        cc.p(-width / 2, +height / 2),
        cc.p(-width / 2, -height / 2)
    ]
}

rss.circSegmentVerts = function(radius, angle, offset, segments, direction) {
    return rss.floatingCircSegmentVerts(radius, angle, offset, segments, 1.0, direction)
}

rss.floatingCircSegmentVerts = function(radius, angle, offset, segments, heightFactor, direction) {
    var verts = []

    direction = direction || 1.0

    verts.push(rss.polarToCartesian(radius * (1 - heightFactor), offset + direction * angle))

    var deltaTheta = angle / segments
    for (var n = 0; n <= segments; ++n) {
        verts.push(rss.polarToCartesian(radius, offset + direction * (angle - n * deltaTheta)))
    }

    verts.push(rss.polarToCartesian(radius * (1 - heightFactor), offset))

    return verts
}

rss.starVerts = function(nRays, r1, r2, rayWidth) {
    var verts = []
    var theta = rss.twoPI / nRays
    for (var n= 0; n < nRays; ++n) {
        verts.push(rss.polarToCartesian(r1, n * theta + Math.PI / 2))
        verts.push(rss.polarToCartesian(r2, (n + 1/2) * theta + Math.PI / 2))
    }
    return verts
}

rss.scaleVerts = function(verts, scale) {
    var newVerts = []
    verts.forEach(function(vert) {
        newVerts.push(cc.p(vert.x * scale, vert.y * scale))
    })
    return newVerts
}

rss.toXYVerts = function(verts) {
    var vertsXY = []
    verts.forEach(function(vert) {
        vertsXY.push(vert.x)
        vertsXY.push(vert.y)
    })
    return vertsXY
}

rss.log = function(str) {
    cc.log("COCOS: " + str)
}

rss.playMusic = function(file) {
    if (!rss.config.mute) {
        cc.audioEngine.setMusicVolume(1)
        cc.audioEngine.playMusic(file)
    }
}

rss.stopMusic = function() {
    cc.audioEngine.stopMusic()
    cc.audioEngine.stopAllEffects()
    // Above does not stop background music mid-file!
    cc.audioEngine.setMusicVolume(0)
}

rss.playEffect = function(file) {
    if (!rss.config.mute) {
        cc.audioEngine.setEffectsVolume(0.2)
        return cc.audioEngine.playEffect(file)
    }
}

rss.stopEffect = function(effect) {
    if (typeof effect === 'object') {
        cc.audioEngine.stopEffect(effect)
    }
}

rss.pause = function() {
    rss.stopMusic()
    cc.director.pause()
}

rss.resume = function() {
    rss.playMusic()
    cc.director.resume()
}

rss.reverseMap = function(map) {
    var reverseMap = {}
    var val
    for (var key in map) {
        val = map[key]
        reverseMap[val] = key
    }
    return reverseMap
}

rss.gameState = function() {
    return rss.game.state
}

rss.gameStateName = function() {
    return rss.gameStateNames[rss.gameState()]
}

rss.includes = function(list, item) {
    var result = false
    list.forEach(function(el) {
        if (el == item) {
            result = true
        }
    })
    return result
}