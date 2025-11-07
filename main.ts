namespace SpriteKind {
    export const rizz = SpriteKind.create()
    export const sigma = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const miniboss = SpriteKind.create()
    export const t2enemy = SpriteKind.create()
    export const t3enemy = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 50)
})
info.onScore(400, function () {
    info.setLife(200)
})
info.onScore(600, function () {
    info.setLife(250)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.t3enemy, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -13)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(15)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . . . f f c c f f . . . . . 
        . . . . f b c b b c b f . . . . 
        . . . f a a a a a a a a f . . . 
        . . f b a a a a a a a a b f . . 
        . . f a a a a a a a a a a f . . 
        . f a a a a a a a a a a a a f . 
        . f b a a a a a a a a a a b f . 
        . f b b a a a a a a a a b b f . 
        . f b b b b b b b b b b b b f . 
        f a b b b b b b b b b b b b a f 
        f a a b b b b b b b b b b a a f 
        . f a a b b b b b b b b a a f . 
        . . 1 1 a f f f f f f a 1 1 . . 
        . . 1 f b f b f b f b b f 1 . . 
        . . . f f b f b f b f f f . . . 
        . . . . . f b f b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f c c f f . . . . . 
        . . . . f b c b b c b f . . . . 
        . . . f a a a a a a a a f . . . 
        . . f a a a a a a a a a b f . . 
        . . f a a a a a a a a a a f . . 
        . f b a a a a a a a a a a b f . 
        . f b b a a a a a a a a b b f . 
        . f b b b b b b b b b b b b f . 
        f b b b b b b b b b b b b b f . 
        f a a b b b b b b b b b a a f . 
        f f a a b b b b b b a a a f . . 
        . f a a a f f f f f f f f b . . 
        . f a f a f b f b f f 1 1 f . . 
        . f a f f b f b f b f f f . . . 
        . . f . . f b f b f f . . . . . 
        `,img`
        . . . . . f f c c f f . . . . . 
        . . . . f b c b b c b f . . . . 
        . . . f a a a a a a a a f . . . 
        . . f b a a a a a a a a b f . . 
        . . f a a a a a a a a a a f . . 
        . f a a a a a a a a a a a a f . 
        . f b a a a a a a a a a a b f . 
        . f b b a a a a a a a a b b f . 
        . f b b b b b b b b b b b b f . 
        f a b b b b b b b b b b b b a f 
        f a a b b b b b b b b b b a a f 
        . f a a b b b b b b b b a a f . 
        . . 1 1 a f f f f f f a 1 1 . . 
        . . 1 f b f b f b f b b f 1 . . 
        . . . f f b f b f b f f f . . . 
        . . . . . f b f b f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f c c f f . . . . . 
        . . . . f b c b b c b f . . . . 
        . . . f a a a a a a a a f . . . 
        . . f b a a a a a a a a a f . . 
        . . f a a a a a a a a a a f . . 
        . f b a a a a a a a a a a b f . 
        . f b b a a a a a a a a b b f . 
        . f b b b b b b b b b b b b f . 
        . f b b b b b b b b b b b b b f 
        . f a a b b b b b b b b b a a f 
        . . f a a a b b b b b b a a f f 
        . . b f f f f f f f f a a a f . 
        . . f 1 1 f f b f b f a f a f . 
        . . . f f f b f b f b f f a f . 
        . . . . . f f b f b f . . f . . 
        `,img`
        . . . . . f f c c f f . . . . . 
        . . . . f b c b b c b f . . . . 
        . . . f a a a a a a a a f . . . 
        . . f b a a a a a a a a b f . . 
        . . f a a a a a a a a a a f . . 
        . f a a a a a a a a a a a a f . 
        . f b a a a a a a a a a a b f . 
        . f b b a a a a a a a a b b f . 
        . f b b b b b b b b b b b b f . 
        f a b b b b b b b b b b b b a f 
        f a a b b b b b b b b b b a a f 
        . f a a b b b b b b b b a a f . 
        . . 1 1 a f f f f f f a 1 1 . . 
        . . 1 f b f b f b f b b f 1 . . 
        . . . f f b f b f b f f f . . . 
        . . . . . f b f b f f . . . . . 
        `],
    600,
    true
    )
})
sprites.onCreated(SpriteKind.t3enemy, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bleh == false) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . f f c c f f . . . . . 
            . . . . f a c b b c a f . . . . 
            . . . f a b b a a b b a f . . . 
            . . f c b d c b b c d b c f . . 
            . . f b d b b c c b b d b f . . 
            . f a a f b c f f c b f a a f . 
            . a 1 1 a f a f f f a f 1 1 a . 
            . f a a f f f a f a f f a a f . 
            . f a a f f a f f f a f a a f . 
            . a c c a 1 1 1 1 1 1 a c c a . 
            . c c c f 1 1 f f 1 1 f c c c . 
            . f c c f c b b b b c f c c f . 
            . . f a c b b b b b b c a f . . 
            . . f f c c c a a c c c f f . . 
            . . . f f b f b f b f f f . . . 
            . . . . f f b f b f b f f . . . 
            `,img`
            . . . . . f f c c f f . . . . . 
            . . . . f a c b b c a f . . . . 
            . . . f a b b a a b b a f . . . 
            . . f c b d c b b c d b c f . . 
            . . f b d b b c c b b d b f . . 
            . f a a f b c f f c b f a a f . 
            . f a a f f f f f f f f a a f . 
            . f c c f f a f f a f f c c f . 
            . f c c f f a f f a f f c c f . 
            f f c c f 1 1 1 1 1 1 f c c f f 
            f c 1 1 f 1 1 f f 1 1 f 1 1 c f 
            . f 1 1 f c b b b b c f 1 1 f . 
            . . f a c b b b b b b c a f . . 
            . . f f c c c a a c c c f f . . 
            . . . f f b f b f b f f f . . . 
            . . . . f f b f b f b f . . . . 
            `],
        1000,
        false
        )
        timer.after(1, function () {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 110, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, -110, 0)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 110, -110)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 110, 110)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, -110, 110)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, -110, -110)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 0, 110)
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                f b b a b a b f . . . . . . . . 
                a a a b a a a a f . . . . . . . 
                f b b a b a b f . . . . . . . . 
                . f b a a b f . . . . . . . . . 
                . . f f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 0, -110)
            bleh = true
            info.startCountdown(60)
        })
    }
})
info.onScore(1200, function () {
    info.setLife(400)
})
info.onScore(1000, function () {
    info.setLife(300)
})
info.onScore(1400, function () {
    info.setLife(450)
})
info.onScore(800, function () {
    info.setLife(350)
})
sprites.onCreated(SpriteKind.Boss, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 1000)
})
sprites.onCreated(SpriteKind.t2enemy, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 75)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -10)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(200)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shards == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            f b b a b a b f . . . . . . . . 
            a a a b a a a a f . . . . . . . 
            f b b a b a b f . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, obsidian, 110, 0)
        shards = false
        timer.after(250, function () {
            shards = true
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    if (info.score() >= 3) {
        tiles.setCurrentTilemap(tilemap`level4`)
        diamond = sprites.create(img`
            ...........ff...........
            ..........faaf..........
            .....f...faaaaf...f.....
            ....faf...faaf...faf....
            ....faaf..ffff..faaf....
            .....faaffffffffaaf.....
            ......ffffffffffff......
            ......ffffffffffff......
            ......ffffffffffff......
            ....ffffffffffffffff....
            ...faafffaaffaafffaaf...
            ..faaffffaaffaaffffaaf..
            ..faf.fffaaffaafff.faf..
            ...f..ffffffffffff..f...
            .....ffffaffffaffff.....
            ....fffffaaffaafffff....
            ....ffffffaaaaffffff....
            ....fffffffaafffffff....
            ........ffffffff........
            .........ffffff.........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.miniboss)
        diamond.follow(obsidian, 80)
        tiles.placeOnTile(diamond, tiles.getTileLocation(14, 9))
        tiles.placeOnTile(obsidian, tiles.getTileLocation(7, 8))
    } else {
        obsidian.sayText("there's still enemies to defeat.", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.t2enemy, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.miniboss, function (sprite25, otherSprite) {
    sprites.destroy(projectile)
    sprites.changeDataNumberBy(otherSprite, "HP", -12)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(50)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . f b c f f f f . . . . . . 
        . . f c a b c b f b f f . . . . 
        . . f a b a b c a a b b f . . . 
        . . f b c b c a a a a a b f . . 
        . . f a a a a a a a a a b f . . 
        . f a a f f b b b b a a b f . . 
        . f a a f f f f f b a a b f . . 
        . f a f f f a f f b a a b f . . 
        . . f f 1 1 a f f b a a b f . . 
        . . . f 1 1 1 1 f b a a b f f . 
        . . . f f f f f f f b a a b f . 
        . . . f c c c f 1 1 f b b f . . 
        . . . f c c c f 1 1 f f f . . . 
        . . f f b f b f b f f f . . . . 
        . . f f f b f b f b f f . . . . 
        . . . . f f b f b f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f b c f f f f . . . . . . 
        . . f c c b c b f b f f . . . . 
        . . f c b c b c b a b b f . . . 
        . . f b c b c a a a a a b f . . 
        . f a a a a a a a a a a b f . . 
        . f a a f f b b b b a a b f . . 
        . f a a f f f f f b a a b f . . 
        . . f f f f a f f b a a b f f . 
        . . . f 1 1 a f f b a a a b f . 
        . . . f 1 1 1 1 f b a a a b f . 
        . . . f f f f f 1 1 b b b f . . 
        . . . f c c c f 1 1 f f f . . . 
        . . f c c c c c f f c c f . . . 
        . . f b f b f b f b f f . . . . 
        . . . f b f b f b f f . . . . . 
        `,img`
        . . . f b c f f f f . . . . . . 
        . . f c a b c b f b f f . . . . 
        . . f a b a b c a a b b f . . . 
        . . f b c b c a a a a a b f . . 
        . . f a a a a a a a a a b f . . 
        . f a a f f b b b b a a b f . . 
        . f a a f f f f f b a a b f . . 
        . f a f f f a f f b a a b f . . 
        . . f f 1 1 a f f b a a b f . . 
        . . . f 1 1 1 1 f b a a b f f . 
        . . . f f f f f f f b a a b f . 
        . . . f c c c f 1 1 f b b f . . 
        . . . f c c c f 1 1 f f f . . . 
        . . f f b f b f b f f f . . . . 
        . . f f f b f b f b f f . . . . 
        . . . . f f b f b f . . . . . . 
        `],
    600,
    true
    )
})
sprites.onCreated(SpriteKind.miniboss, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -12)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(5)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
info.onCountdownEnd(function () {
    bleh = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-25)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
info.onScore(100, function () {
    info.setLife(100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . . . . f f f f c b f . . . 
        . . . . f f b f b c b a c f . . 
        . . . f b b a a c b a b a f . . 
        . . f b a a a a a c b c b f . . 
        . . f b a a a a a a a a a f . . 
        . . f b a a b b b b f f a a f . 
        . . f b a a b f f f f f a a f . 
        . . f b a a b f f a f f f a f . 
        . . f b a a b f f a 1 1 f f . . 
        . f f b a a b f 1 1 1 1 f . . . 
        . f b a a b f f f f f f f . . . 
        . . f b b f 1 1 f c c c f . . . 
        . . . f f f 1 1 f c c c f . . . 
        . . . . f f f b f b f b f f . . 
        . . . . f f b f b f b f f f . . 
        . . . . . . f b f b f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f c b f . . . 
        . . . . f f b f b c b c c f . . 
        . . . f b b a b c b c b c f . . 
        . . f b a a a a a c b c b f . . 
        . . f b a a a a a a a a a a f . 
        . . f b a a b b b b f f a a f . 
        . . f b a a b f f f f f a a f . 
        . f f b a a b f f a f f f f . . 
        . f b a a a b f f a 1 1 f . . . 
        . f b a a a b f 1 1 1 1 f . . . 
        . . f b b b 1 1 f f f f f . . . 
        . . . f f f 1 1 f c c c f . . . 
        . . . f c c f f c c c c c f . . 
        . . . . f f b f b f b f b f . . 
        . . . . . f f b f b f b f . . . 
        `,img`
        . . . . . . f f f f c b f . . . 
        . . . . f f b f b c b a c f . . 
        . . . f b b a a c b a b a f . . 
        . . f b a a a a a c b c b f . . 
        . . f b a a a a a a a a a f . . 
        . . f b a a b b b b f f a a f . 
        . . f b a a b f f f f f a a f . 
        . . f b a a b f f a f f f a f . 
        . . f b a a b f f a 1 1 f f . . 
        . f f b a a b f 1 1 1 1 f . . . 
        . f b a a b f f f f f f f . . . 
        . . f b b f 1 1 f c c c f . . . 
        . . . f f f 1 1 f c c c f . . . 
        . . . . f f f b f b f b f f . . 
        . . . . f f b f b f b f f f . . 
        . . . . . . f b f b f f . . . . 
        `],
    600,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.t3enemy, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.t2enemy, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -14)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(10)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles11, function (sprite, location) {
    if (info.score() >= 10) {
        tiles.setCurrentTilemap(tilemap`level1`)
        diamond = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f 4 4 4 4 4 4 f f f . . 
            . . f f 4 5 5 5 5 5 5 4 4 f . . 
            . . f 4 5 f f f f f f 5 4 f . . 
            . . f 5 f f f f f f f f 5 f . . 
            . f f 5 f f 5 f f 5 f f 5 f f . 
            . f f 5 f f 5 f f 5 f f 5 f f . 
            . . f 5 f f f f f f f 5 5 f . . 
            . f f f f f 5 4 4 4 5 5 f . . . 
            . f 5 5 5 f 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 f 5 5 5 5 5 f 5 5 f . 
            . . f 5 5 f 4 5 5 4 4 f 5 5 f . 
            . . . f f f f f f f f f 5 5 f . 
            . . . . . f f . . f f . f 5 f . 
            . . . . . . . . . . . . . f . . 
            `, SpriteKind.Boss)
        diamond.follow(obsidian, 80)
        tiles.placeOnTile(diamond, tiles.getTileLocation(14, 9))
        tiles.placeOnTile(obsidian, tiles.getTileLocation(7, 8))
    } else {
        obsidian.sayText("i must kill the king.", 500, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.miniboss, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-10)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . . . f f c c f f . . . . . 
        . . . . f a c b b c a f . . . . 
        . . . f a b b a a b b a f . . . 
        . . f c b d c b b c d b c f . . 
        . . f b d b b c c b b d b f . . 
        . f a a f b c f f c b f a a f . 
        . f a a f f f f f f f f a a f . 
        . f c c f f a f f a f f c c f . 
        . f c c f f a f f a f f c c f . 
        f f c c f 1 1 1 1 1 1 f c c f f 
        f c 1 1 f 1 1 f f 1 1 f 1 1 c f 
        . f 1 1 f c b b b b c f 1 1 f . 
        . . f a c b b b b b b c a f . . 
        . . f f c c c a a c c c f f . . 
        . . . f f b f b f b f f f . . . 
        . . . . f f b f b f b f . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f b b f f . . . . . 
        . . . . f c b a a b c f . . . . 
        . . . f c 1 c b b c 1 c f . . . 
        . . f c 1 c b c c b c 1 c f . . 
        . f a a f b c f f c b f a a f . 
        . f a a f f f f f f f f a a f . 
        . f b a f f f f f f f f a b f . 
        f f b b f f a f f a f f b b f f 
        f b b b f f a 1 1 a f f b b b f 
        . f b b f 1 1 f f 1 1 f b b f . 
        . . f 1 1 1 f b b b c f f f . . 
        . . f f 1 1 f b b b b c 1 f . . 
        . . . f f f b b c b c c f f . . 
        . . . f f f b f b f b f f . . . 
        . . . . f f f b f b f b f . . . 
        `,img`
        . . . . . f f c c f f . . . . . 
        . . . . f a c b b c a f . . . . 
        . . . f a b b a a b b a f . . . 
        . . f c b d c b b c d b c f . . 
        . . f b d b b c c b b d b f . . 
        . f a a f b c f f c b f a a f . 
        . f a a f f f f f f f f a a f . 
        . f c c f f a f f a f f c c f . 
        . f c c f f a f f a f f c c f . 
        f f c c f 1 1 1 1 1 1 f c c f f 
        f c 1 1 f 1 1 f f 1 1 f 1 1 c f 
        . f 1 1 f c b b b b c f 1 1 f . 
        . . f a c b b b b b b c a f . . 
        . . f f c c c a a c c c f f . . 
        . . . f f b f b f b f f f . . . 
        . . . . f f b f b f b f . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f b b f f . . . . . 
        . . . . f c b a a b c f . . . . 
        . . . f c 1 c b b c 1 c f . . . 
        . . f c 1 c b c c b c 1 c f . . 
        . f a a f b c f f c b f a a f . 
        . f a a f f f f f f f f a a f . 
        . f b a f f f f f f f f a b f . 
        f f b b f f a f f a f f b b f f 
        f b b b f f a 1 1 a f f b b b f 
        . f b b f 1 1 f f 1 1 f b b f . 
        . . f f f c b b b f 1 1 1 f . . 
        . . f 1 c b b b b f 1 1 f f . . 
        . . f f c c b c b b f f f . . . 
        . . . f f b f b f b f f f . . . 
        . . . f b f b f b f f f . . . . 
        `,img`
        . . . . . f f c c f f . . . . . 
        . . . . f a c b b c a f . . . . 
        . . . f a b b a a b b a f . . . 
        . . f c b d c b b c d b c f . . 
        . . f b d b b c c b b d b f . . 
        . f a a f b c f f c b f a a f . 
        . f a a f f f f f f f f a a f . 
        . f c c f f a f f a f f c c f . 
        . f c c f f a f f a f f c c f . 
        f f c c f 1 1 1 1 1 1 f c c f f 
        f c 1 1 f 1 1 f f 1 1 f 1 1 c f 
        . f 1 1 f c b b b b c f 1 1 f . 
        . . f a c b b b b b b c a f . . 
        . . f f c c c a a c c c f f . . 
        . . . f f b f b f b f f f . . . 
        . . . . f f b f b f b f . . . . 
        `],
    600,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    diamond = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 5 5 5 5 5 5 4 4 f . . 
        . . f 4 5 f f f f f f 5 4 f . . 
        . . f 5 f f f f f f f f 5 f . . 
        . f f 5 f f 5 f f 5 f f 5 f f . 
        . f f 5 f f 5 f f 5 f f 5 f f . 
        . . f 5 f f f f f f f 5 5 f . . 
        . f f f f f 5 4 4 4 5 5 f . . . 
        . f 5 5 5 f 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 f 5 5 5 5 5 f 5 5 f . 
        . . f 5 5 f 4 5 5 4 4 f 5 5 f . 
        . . . f f f f f f f f f 5 5 f . 
        . . . . . f f . . f f . f 5 f . 
        . . . . . . . . . . . . . f . . 
        `, SpriteKind.Boss)
    helioite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f e e f f f . . . . 
        . . . f f f e e e e f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 e e e e e e 4 4 f . . 
        . . f 4 e f f f f f f e 4 f . . 
        . . f e f f f f f f f f e f . . 
        . f f e f f e f f e f f e f f . 
        . f f e f f e f f e f f e f f . 
        . . f e f f f f f f f e e f . . 
        . f f f f f e 4 4 4 e e f . . . 
        . f e e e f e e e e e e e f . . 
        . f e e e f e e e e e f e e f . 
        . . f e e f 4 e e 4 4 f e e f . 
        . . . f f f f f f f f f e e f . 
        . . . . . f f . . f f . f e f . 
        . . . . . . . . . . . . . f . . 
        `, SpriteKind.Boss)
    opal = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . f f f 1 1 1 1 f f f . . . 
        . . f f f d d d d d d f f f . . 
        . . f f d 1 1 1 1 1 1 d d f . . 
        . . f d 1 f f f f f f 1 d f . . 
        . . f 1 f f f f f f f f 1 f . . 
        . f f 1 f f 1 f f 1 f f 1 f f . 
        . f f 1 f f 1 f f 1 f f 1 f f . 
        . . f 1 f f f f f f f 1 1 f . . 
        . f f f f f 1 d d d 1 1 f . . . 
        . f 1 1 1 f 1 1 1 1 1 1 1 f . . 
        . f 1 1 1 f 1 1 1 1 1 f 1 1 f . 
        . . f 1 1 f d 1 1 d d f 1 1 f . 
        . . . f f f f f f f f f 1 1 f . 
        . . . . . f f . . f f . f 1 f . 
        . . . . . . . . . . . . . f . . 
        `, SpriteKind.Boss)
    ruby = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f d d f f f . . . . 
        . . . f f f d d d d f f f . . . 
        . . f f f 1 1 1 1 1 1 f f f . . 
        . . f f 1 d d d d d d 1 1 f . . 
        . . f 1 d f f f f f f d 1 f . . 
        . . f d f f f f f f f f d f . . 
        . f f d f f d f f d f f d f f . 
        . f f d f f d f f d f f d f f . 
        . . f d f f f f f f f d d f . . 
        . f f f f f d 1 1 1 d d f . . . 
        . f d d d f d d d d d d d f . . 
        . f d d d f d d d d d f d d f . 
        . . f d d f 1 d d 1 1 f d d f . 
        . . . f f f f f f f f f d d f . 
        . . . . . f f . . f f . f d f . 
        . . . . . . . . . . . . . f . . 
        `, SpriteKind.Boss)
    diamond.follow(obsidian, 100)
    helioite.follow(obsidian, 80)
    opal.follow(obsidian, 110)
    ruby.follow(obsidian, 90)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(7, 9))
})
info.onScore(1600, function () {
    info.setLife(500)
})
info.onScore(50, function () {
    info.setLife(75)
})
info.onScore(200, function () {
    info.setLife(150)
})
let diamond: Sprite = null
let projectile: Sprite = null
let shards = false
let isInvincible = false
let bleh = false
let ruby: Sprite = null
let helioite: Sprite = null
let opal: Sprite = null
let obsidian: Sprite = null
scene.cameraFollowSprite(obsidian)
tiles.setCurrentTilemap(tilemap`level6`)
obsidian = sprites.create(img`
    . . . . . f f c c f f . . . . . 
    . . . . f a c b b c a f . . . . 
    . . . f a b b a a b b a f . . . 
    . . f c b d c b b c d b c f . . 
    . . f b d b b c c b b d b f . . 
    . f a a f b c f f c b f a a f . 
    . f a a f f f f f f f f a a f . 
    . f c c f f a f f a f f c c f . 
    . f c c f f a f f a f f c c f . 
    f f c c f 1 1 1 1 1 1 f c c f f 
    f c 1 1 f 1 1 f f 1 1 f 1 1 c f 
    . f 1 1 f c b b b b c f 1 1 f . 
    . . f a c b b b b b b c a f . . 
    . . f f c c c a a c c c f f . . 
    . . . f f b f b f b f f f . . . 
    . . . . f f b f b f b f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(obsidian)
info.setLife(50)
info.setScore(1000)
controller.moveSprite(obsidian, 110, 110)
opal = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb151151bf.......
    .......f15155151f.......
    ......fd11555511df......
    ......fd15155151df......
    ......fddd5115dddf......
    ......fbdb5dd5bdbf......
    ......fcdc5115cdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.t3enemy)
helioite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11133111f.......
    ......fd11333311df......
    ......fd11133111df......
    ......fddd1111dddf......
    ......fbdb3dd3bdbf......
    ......fcdc3113cdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.t2enemy)
ruby = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(opal, tiles.getTileLocation(13, 9))
tiles.placeOnTile(helioite, tiles.getTileLocation(12, 14))
tiles.placeOnTile(ruby, tiles.getTileLocation(5, 14))
tiles.placeOnTile(obsidian, tiles.getTileLocation(127, 127))
helioite.follow(obsidian, 90)
opal.follow(obsidian, 80)
ruby.follow(obsidian, 70)
bleh = false
isInvincible = false
shards = true
forever(function () {
    if (info.score() >= 1000) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            f b b a b a b f . . . . . . . . 
            a a a b a a a a f . . . . . . . 
            f b b a b a b f . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, obsidian, 110, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            f b b a b a b f . . . . . . . . 
            a a a b a a a a f . . . . . . . 
            f b b a b a b f . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, obsidian, 0, 110)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            f b b a b a b f . . . . . . . . 
            a a a b a a a a f . . . . . . . 
            f b b a b a b f . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, obsidian, -110, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            f b b a b a b f . . . . . . . . 
            a a a b a a a a f . . . . . . . 
            f b b a b a b f . . . . . . . . 
            . f b a a b f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, obsidian, 0, -110)
        pause(10000)
    }
})
