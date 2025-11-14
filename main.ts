namespace SpriteKind {
    export const rizz = SpriteKind.create()
    export const sigma = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const miniboss = SpriteKind.create()
    export const t2enemy = SpriteKind.create()
    export const t3enemy = SpriteKind.create()
    export const Finale_Ultima_Boss_Phase_1 = SpriteKind.create()
    export const Finale_Ultima_Boss_Phase_2 = SpriteKind.create()
}
info.onScore(3000, function () {
    info.setLife(500)
    controller.moveSprite(obsidian, 150, 150)
})
info.onScore(600, function () {
    info.setLife(175)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.t3enemy, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -13)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(15)
        if (info.life() < 50) {
            info.changeLifeBy(3)
        }
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
sprites.onCreated(SpriteKind.Finale_Ultima_Boss_Phase_2, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 2000)
})
info.onScore(1300, function () {
    info.setLife(275)
    controller.moveSprite(obsidian, 100, 100)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 500) {
        if (LostSoul == true) {
            obsidian.setImage(img`
                . . . . . f f c c f f . . . . . 
                . . . . f a c b b c a f . . . . 
                . . . f a b f a a f b a f . . . 
                . . f c b d c f f c d b c f . . 
                . . f b d b b c c b b d b f . . 
                . f a a f b c f f c b f a a f . 
                . f a a f a f f f f a f a a f . 
                . f c c f f a f f a f f c c f . 
                . f c c f a f f f f a f c c f . 
                f f c f 1 1 1 1 1 1 1 1 f c f f 
                f c f a f 1 f f f f 1 f a f c f 
                . f a f f f b f f b f f f a f . 
                . 1 f a f b f b b f b f a f 1 . 
                . . f f c c c a a c c c f f . . 
                . . . f f b f b f b f f f . . . 
                . . . . f f b f b f b f . . . . 
                `)
            timer.after(500, function () {
                obsidian.setImage(img`
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
                    `)
            })
            LostSoul = false
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
        }
        timer.after(10000, function () {
            LostSoul = true
        })
    }
    if (info.score() >= 1500) {
        if (LostSoul == true) {
            obsidian.setImage(img`
                . . . . . f f c c f f . . . . . 
                . . . . f a c b b c a f . . . . 
                . . . f a b f a a f b a f . . . 
                . . f c b d c f f c d b c f . . 
                . . f b d b b c c b b d b f . . 
                . f a a f b c f f c b f a a f . 
                . f a a f a f f f f a f a a f . 
                . f c c f f a f f a f f c c f . 
                . f c c f a f f f f a f c c f . 
                f f c f 1 1 1 1 1 1 1 1 f c f f 
                f c f a f 1 f f f f 1 f a f c f 
                . f a f f f b f f b f f f a f . 
                . 1 f a f b f b b f b f a f 1 . 
                . . f f c c c a a c c c f f . . 
                . . . f f b f b f b f f f . . . 
                . . . . f f b f b f b f . . . . 
                `)
            timer.after(500, function () {
                obsidian.setImage(img`
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
                    `)
            })
            LostSoul = false
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
            pause(200)
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
        }
        timer.after(10000, function () {
            LostSoul = true
        })
    }
    if (info.score() >= 3000) {
        if (LostSoul == true) {
            obsidian.setImage(img`
                . . . . . f f c c f f . . . . . 
                . . . . f a c b b c a f . . . . 
                . . . f a b f a a f b a f . . . 
                . . f c b d c f f c d b c f . . 
                . . f b d b b c c b b d b f . . 
                . f a a f b c f f c b f a a f . 
                . f a a f a f f f f a f a a f . 
                . f c c f f a f f a f f c c f . 
                . f c c f a f f f f a f c c f . 
                f f c f 1 1 1 1 1 1 1 1 f c f f 
                f c f a f 1 f f f f 1 f a f c f 
                . f a f f f b f f b f f f a f . 
                . 1 f a f b f b b f b f a f 1 . 
                . . f f c c c a a c c c f f . . 
                . . . f f b f b f b f f f . . . 
                . . . . f f b f b f b f . . . . 
                `)
            timer.after(500, function () {
                obsidian.setImage(img`
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
                    `)
            })
            LostSoul = false
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
            pause(200)
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
            pause(200)
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f . . . . . f f f . . . . . 
                f f f . f f f f f f f f f a a . 
                f f f f f f f f f f f f f f a a 
                a f f f f f f f f a f f f f f a 
                a a a a a a a a a a a a a a a a 
                a a a a a a a a a a a a a a a a 
                a f f f f f f f f a f f f f f a 
                f f f f f f f f f f f f f f a a 
                f f f . f f f f f f f f f a a . 
                . f f . . . . . f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
        }
        timer.after(10000, function () {
            LostSoul = true
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finale_Ultima_Boss_Phase_2, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-50)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onScore(1000, function () {
    info.setLife(225)
    controller.moveSprite(obsidian, 95, 95)
})
sprites.onCreated(SpriteKind.Boss, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 1000)
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
        timer.after(3000, function () {
        	
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
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onScore(1700, function () {
    info.setLife(325)
    controller.moveSprite(obsidian, 110, 110)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.miniboss, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -12)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(50)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
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
controller.combos.attachCombo("a+b", function () {
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finale_Ultima_Boss_Phase_2, function (sprite25, otherSprite) {
    if (sprite25 == sprites.create(img`
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
        `, SpriteKind.Projectile)) {
        sprites.destroy(sprite25)
        sprites.changeDataNumberBy(otherSprite, "HP", -10)
    }
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(1000)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite25, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "HP", -15)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(5)
        if (info.life() < 50) {
            info.changeLifeBy(1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onCountdownEnd(function () {
    bleh = false
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite25, otherSprite) {
    if (sprite25 == sprites.create(img`
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
        `, SpriteKind.Projectile)) {
        sprites.destroy(sprite25)
        sprites.changeDataNumberBy(otherSprite, "HP", -10)
    }
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(1000)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
    }
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
        timer.after(1000, function () {
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
        if (info.life() < 50) {
            info.changeLifeBy(2)
        }
    }
})
info.onScore(2500, function () {
    info.setLife(400)
    controller.moveSprite(obsidian, 130, 130)
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
        timer.after(1000, function () {
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
sprites.onCreated(SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite) {
    sprites.setDataNumber(sprite, "HP", 1000)
    for (let index = 0; index < 3; index++) {
        timer.after(10000, function () {
            wrath = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 f f f . . . . . . . 2 . . . . 
                2 2 f f f . . . . . 2 . 2 . . . 
                f 2 2 2 f f f f f 2 . . . 2 . . 
                f f f 2 2 f f f f f f . . . 2 . 
                f f f f f 2 2 f f f f f f f f 2 
                f f f f f 2 2 f f f f f f f f 2 
                f f f 2 2 f f f f f f . . . 2 . 
                f 2 2 2 f f f f f 2 . . . 2 . . 
                2 2 f f f . . . . . 2 . 2 . . . 
                2 f f f . . . . . . . 2 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, you, 50, 0)
            pause(500)
            wrath = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 2 . . . . . . . f f f 2 
                . . . 2 . 2 . . . . . f f f 2 2 
                . . 2 . . . 2 f f f f f 2 2 2 f 
                . 2 . . . f f f f f f 2 2 f f f 
                2 f f f f f f f f 2 2 f f f f f 
                2 f f f f f f f f 2 2 f f f f f 
                . 2 . . . f f f f f f 2 2 f f f 
                . . 2 . . . 2 f f f f f 2 2 2 f 
                . . . 2 . 2 . . . . . f f f 2 2 
                . . . . 2 . . . . . . . f f f 2 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, you, -50, 0)
            pause(500)
            wrath = sprites.createProjectileFromSprite(img`
                . . . 2 2 f f f f f f 2 2 . . . 
                . . . f 2 2 f f f f 2 2 f . . . 
                . . . f f 2 f f f f 2 f f . . . 
                . . . f f 2 2 f f 2 2 f f . . . 
                . . . . f f 2 f f 2 f f . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . 2 f f f f 2 . . . . . 
                . . . . 2 . f f f f . 2 . . . . 
                . . . 2 . . . f f . . . 2 . . . 
                . . . . 2 . . f f . . 2 . . . . 
                . . . . . 2 . f f . 2 . . . . . 
                . . . . . . 2 f f 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                `, you, 0, 50)
            pause(500)
            wrath = sprites.createProjectileFromSprite(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 f f 2 . . . . . . 
                . . . . . 2 . f f . 2 . . . . . 
                . . . . 2 . . f f . . 2 . . . . 
                . . . 2 . . . f f . . . 2 . . . 
                . . . . 2 . f f f f . 2 . . . . 
                . . . . . 2 f f f f 2 . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . . f f 2 2 f f . . . . . 
                . . . . f f 2 f f 2 f f . . . . 
                . . . f f 2 2 f f 2 2 f f . . . 
                . . . f f 2 f f f f 2 f f . . . 
                . . . f 2 2 f f f f 2 2 f . . . 
                . . . 2 2 f f f f f f 2 2 . . . 
                `, you, 0, -50)
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite27, otherSprite2) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-50)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onScore(200, function () {
    info.setLife(100)
    controller.moveSprite(obsidian, 90, 90)
})
info.onScore(2100, function () {
    info.setLife(375)
    controller.moveSprite(obsidian, 120, 120)
})
sprites.onDestroyed(SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite) {
    animation.runMovementAnimation(
    you,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    you = sprites.create(img`
        ................
        ......2..2......
        ....222..2222...
        ...2222...222...
        ...2.2.....22...
        ...2........2...
        ...2fffaafff2...
        ...2ffaffaff2...
        ....fa2222af....
        ....af2ff2fa....
        ....fa2222af....
        ...fffaffafff...
        ...ffffaaffff...
        ...f11111111f...
        ...f11111111f...
        ...ff111111ff...
        .aaff111111ffaaa
        aa.ff111111ff..a
        a.22f111111f22.a
        a.2.f111111f.2.a
        a.2.f111111f.2.a
        a.2..211112f2.aa
        aa.2.221122ffff.
        .aaff222222fffff
        ..ff..2222ffffff
        ..ff..2222111.ff
        ..ff..f22f11f..f
        ..ff..f1f11ff..f
        ..ff..fffffff..f
        ..ff..ffffff...f
        ..ff..f1f1ff...f
        .fff.f11f1ff..ff
        .ff..f1ff1ff..ff
        .ff..11ff111..ff
        .ff..fffffff..ff
        .ff..ffff1ff..ff
        .ff..ff1f1ff..ff
        .22..f11f11f..22
        .2..f11fff1f..22
        .2..f1ffff11...2
        ..2.ffffffff...2
        ....ff....ff....
        ....ff....ff....
        ....f......ff...
        ...22......ff...
        ...2.......ff...
        ...2........22..
        ...2........22..
        `, SpriteKind.Finale_Ultima_Boss_Phase_2)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 f f f . . . . . . . 2 . . . . 
        2 2 f f f . . . . . 2 . 2 . . . 
        f 2 2 2 f f f f f 2 . . . 2 . . 
        f f f 2 2 f f f f f f . . . 2 . 
        f f f f f 2 2 f f f f f f f f 2 
        f f f f f 2 2 f f f f f f f f 2 
        f f f 2 2 f f f f f f . . . 2 . 
        f 2 2 2 f f f f f 2 . . . 2 . . 
        2 2 f f f . . . . . 2 . 2 . . . 
        2 f f f . . . . . . . 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, you, 110, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 . . . . . . . f f f 2 
        . . . 2 . 2 . . . . . f f f 2 2 
        . . 2 . . . 2 f f f f f 2 2 2 f 
        . 2 . . . f f f f f f 2 2 f f f 
        2 f f f f f f f f 2 2 f f f f f 
        2 f f f f f f f f 2 2 f f f f f 
        . 2 . . . f f f f f f 2 2 f f f 
        . . 2 . . . 2 f f f f f 2 2 2 f 
        . . . 2 . 2 . . . . . f f f 2 2 
        . . . . 2 . . . . . . . f f f 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, you, -110, 0)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 f f 2 . . . . . . 
        . . . . . 2 . f f . 2 . . . . . 
        . . . . 2 . . f f . . 2 . . . . 
        . . . 2 . . . f f . . . 2 . . . 
        . . . . 2 . f f f f . 2 . . . . 
        . . . . . 2 f f f f 2 . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . f f 2 2 f f 2 2 f f . . . 
        . . . f f 2 f f f f 2 f f . . . 
        . . . f 2 2 f f f f 2 2 f . . . 
        . . . 2 2 f f f f f f 2 2 . . . 
        `, you, 0, 110)
    projectile = sprites.createProjectileFromSprite(img`
        . . . 2 2 f f f f f f 2 2 . . . 
        . . . f 2 2 f f f f 2 2 f . . . 
        . . . f f 2 f f f f 2 f f . . . 
        . . . f f 2 2 f f 2 2 f f . . . 
        . . . . f f 2 f f 2 f f . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . . f f 2 2 f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . 2 f f f f 2 . . . . . 
        . . . . 2 . f f f f . 2 . . . . 
        . . . 2 . . . f f . . . 2 . . . 
        . . . . 2 . . f f . . 2 . . . . 
        . . . . . 2 . f f . 2 . . . . . 
        . . . . . . 2 f f 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, you, 0, -110)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbffbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbffbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbffbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbffbbffbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbffffbbbfbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbfbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbffbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbfbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbbbbffbbbbbbbbbbbffbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbfbbbbbbbbbbfffbbbbbbbbbbbbbbbfffbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfbbbbffffffbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setCurrentTilemap(tilemap`level8`)
    you = sprites.create(img`
        ................
        ................
        ................
        ................
        ................
        ................
        .....ffffff.....
        ....ffffffff....
        ....f1ff11ff....
        ....f1ff11ff....
        ....ffffffff....
        ...ffffffffff...
        ...ffffffffff...
        ...f11111111f...
        ...f11111111f...
        ...ff111111ff...
        ...ff111111ff...
        ...ff111111ff...
        ....f111111f....
        ....f111111f....
        ....f111111f....
        .....f1111ff....
        .....ff11ffffff.
        ...fffffffffffff
        ..ff..1fffffffff
        ..ff..11ff111.ff
        ..ff..f1ff11f..f
        ..ff..f1f11ff..f
        ..ff..fffffff..f
        ..ff..ffffff...f
        ..ff..f1f1ff...f
        .fff.f11f1ff..ff
        .ff..f1ff1ff..ff
        .ff..11ff111..ff
        .ff..fffffff..ff
        .ff..ffff1ff..ff
        .ff..ff1f1ff..ff
        .22..f11f11f..22
        .2..f11fff1f..22
        .2..f1ffff11...2
        ..2.ffffffff...2
        ....ff....ff....
        ....ff....ff....
        ....f......ff...
        ...22......ff...
        ...2.......ff...
        ...2........22..
        ...2........22..
        `, SpriteKind.Finale_Ultima_Boss_Phase_1)
    tiles.placeOnTile(you, tiles.getTileLocation(9, 3))
    tiles.placeOnTile(obsidian, tiles.getTileLocation(9, 3))
})
let you: Sprite = null
let wrath: Sprite = null
let ruby: Sprite = null
let opal: Sprite = null
let helioite: Sprite = null
let diamond: Sprite = null
let chargeblast: Sprite = null
let projectile: Sprite = null
let LostSoul = false
let shards = false
let isInvincible = false
let bleh = false
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
bleh = false
isInvincible = false
shards = true
tiles.placeOnTile(obsidian, tiles.getTileLocation(127, 127))
controller.moveSprite(obsidian, 150, 150)
LostSoul = true
info.setLife(500)
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(600000, function () {
	
})
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
    if (info.score() >= 500) {
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
        pause(10000)
    }
})
game.onUpdateInterval(20000, function () {
	
})
game.onUpdateInterval(10000, function () {
	
})
