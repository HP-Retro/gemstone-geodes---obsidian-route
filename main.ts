namespace SpriteKind {
    export const rizz = SpriteKind.create()
    export const sigma = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const miniboss = SpriteKind.create()
    export const t2enemy = SpriteKind.create()
    export const t3enemy = SpriteKind.create()
    export const Finale_Ultima_Boss_Phase_1 = SpriteKind.create()
    export const Finale_Ultima_Boss_Phase_2 = SpriteKind.create()
    export const NPC_Cosmetic = SpriteKind.create()
    export const cosmetic2 = SpriteKind.create()
    export const takingtoolong = SpriteKind.create()
    export const Hatsunemiku = SpriteKind.create()
    export const npcchallengesecretboss = SpriteKind.create()
    export const EOC = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const cosmetic_peak = SpriteKind.create()
    export const cosmetic = SpriteKind.create()
    export const goldnpc = SpriteKind.create()
    export const shopnpc = SpriteKind.create()
    export const stopper = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite10, location7) {
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(1, 128))
})
info.onScore(600, function () {
    info.setLife(175)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.t3enemy, function (sprite25, otherSprite) {
    sprites.destroy(projectile)
    sprites.changeDataNumberBy(otherSprite, "HP", -13)
    if (sprites.readDataNumber(otherSprite, "HP") <= 0) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(15)
        info.changeLifeBy(3)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . f f b b f f . . . . . 
            . . . . f 5 b 9 9 b 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 5 5 b b 5 5 b 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . d d 5 f f f f f f 5 d d . . 
            . . d f 8 9 8 9 8 9 8 8 f d . . 
            . . . f f 8 9 8 9 8 f f f . . . 
            . . . . . f 8 9 8 9 f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f b b f f . . . . . 
            . . . . f 5 b 9 9 b 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 5 5 b b 5 5 b 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 f f f f f f f f . . . 
            . f 5 f 5 f 8 9 8 9 f d d f . . 
            . f 5 f f 8 9 8 9 8 9 f f . . . 
            . . f . . 9 8 9 8 9 f . . . . . 
            `,img`
            . . . . . f f b b f f . . . . . 
            . . . . f 5 b 9 9 b 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 5 5 b b 5 5 b 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . d d 5 f f f f f f 5 d d . . 
            . . d f 8 9 8 9 8 9 8 8 f d . . 
            . . . f f 8 9 8 9 8 f f f . . . 
            . . . . . f 8 9 8 9 f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f b b f f . . . . . 
            . . . . f 5 b 9 9 b 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 5 5 b b 5 5 b 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f f 
            . . . f f f f f f f f 5 5 5 f . 
            . . f d d f 9 8 9 8 f 5 f 5 f . 
            . . . f f 9 8 9 8 9 8 f f 5 f . 
            . . . . . f 9 8 9 8 9 . . f . . 
            `,img`
            . . . . . f f b b f f . . . . . 
            . . . . f 5 b 9 9 b 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 5 5 b b 5 5 b 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
            . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . d d 5 f f f f f f 5 d d . . 
            . . d f 8 9 8 9 8 9 8 8 f d . . 
            . . . f f 8 9 8 9 8 f f f . . . 
            . . . . . f 8 9 8 9 f . . . . . 
            `],
        600,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . 9 . . . . . . . . 
            . . . . . . 9 b 9 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 9 . . . . . . . . 
            . . . . . . 9 b 9 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . 9 5 5 5 5 5 9 . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . 9 5 5 5 5 5 9 . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 9 . . . . . . . . 
            . . . . . . 9 b 9 . . . . . . . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 9 b 9 b 9 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . e 2 2 2 2 2 e . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . b b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . 1 . . . . . . 
            . . . 1 . . . . . . 1 . . . . . 
            . . . 1 . . . . . . 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . b 1 1 1 1 1 1 . . . . . . 
            . . . . b b c c c . . . . . . . 
            . . . . b b b c c c . . . . . . 
            . . . . c b b c c c . . . . . . 
            . . . . c c c b c c . . . . . . 
            . . . . c c c c b c . . . . . . 
            . . . . . f . . f b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . 1 . . . . 
            . . . . . 1 . . . . . . 1 . . . 
            . . . . . 1 . . . . . . 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 b . . . 
            . . . . . . . c c c b b . . . . 
            . . . . . . c c c b b b . . . . 
            . . . . . . c c c b b c . . . . 
            . . . . . . c c b c c c . . . . 
            . . . . . . c b c c c c . . . . 
            . . . . . . b f . . f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . . 1 . . . . . . 
            . . . 1 . . . . . . 1 . . . . . 
            . . . 1 . . . . . . 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . 1 1 1 1 1 1 1 1 . . . . . 
            . . . b 1 1 1 1 1 1 . . . . . . 
            . . . . b b c c c . . . . . . . 
            . . . . b b b c c c . . . . . . 
            . . . . c b b c c c . . . . . . 
            . . . . c c c b c c . . . . . . 
            . . . . c c c c b c . . . . . . 
            . . . . . f . . f b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 . . . . 1 . . . . 
            . . . . . 1 . . . . . . 1 . . . 
            . . . . . 1 . . . . . . 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . 1 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 1 1 1 1 b . . . 
            . . . . . . . c c c b b . . . . 
            . . . . . . c c c b b b . . . . 
            . . . . . . c c c b b c . . . . 
            . . . . . . c c b c c c . . . . 
            . . . . . . c b c c c c . . . . 
            . . . . . . b f . . f . . . . . 
            `],
        500,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.t2enemy, assets.tile`myTile22`, function (sprite, location) {
    sprites.destroy(sprite)
})
info.onScore(1300, function () {
    info.setLife(275)
    controller.moveSprite(obsidian, 100, 100)
})
sprites.onCreated(SpriteKind.Boss, function (sprite5) {
    sprites.setDataNumber(sprite5, "HP", 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    tutorial.sayText("hello princess! welcome to the overworld! i know its different from gemlandia, but you must vanquish the kings! i bid thee good luck!", 5000, true)
    pause(5500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite255, otherSprite6) {
    sprites.destroy(projectile)
    sprites.changeDataNumberBy(otherSprite6, "HP", -15)
    if (sprites.readDataNumber(otherSprite6, "HP") <= 0) {
        sprites.destroy(otherSprite6)
        info.changeScoreBy(5)
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hatsunemiku, function (sprite, otherSprite) {
    miku.sayText("Kon'nichiwa! Watashi wa hatsunemikudesu! Kono o-ten no ōnādesu. Hitsuyōna keiken-chi ga tamatte ireba, dono sukin demo jiyū ni sōbi shite kudasai ne!", 5000, true)
    animation.runImageAnimation(
    miku,
    [img`
        . . f f f f . . . . f f f f . . 
        . f 9 9 2 f f f f f f 2 9 9 f . 
        f 9 9 2 f 9 9 9 9 9 9 f 7 9 9 f 
        f 9 2 f 9 9 9 9 9 9 7 9 7 2 7 f 
        f 9 9 f 9 9 f f f f 9 7 7 7 9 f 
        f 9 9 f 9 f 6 d d 6 f 9 1 9 9 f 
        f 9 f 9 9 f f d d f f 9 1 f 9 f 
        f 9 9 f 9 f d d d d f 9 d 9 9 f 
        . f 9 9 f f f b b f f d d 9 f . 
        . f 9 9 f d b 9 9 b d d 9 9 f . 
        f 9 9 f d d b b 9 b f . f 9 9 f 
        . f f d d f b b 9 b f . . f f . 
        . . f f f f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f d d b d f . . . . . 
        . . . . . f c c a c f . . . . . 
        `,img`
        . . f f f f . . . . f f f f . . 
        . f 9 9 2 f f f f f f 2 9 9 f . 
        f 9 9 2 f 9 9 9 9 9 9 f 2 7 9 f 
        f 9 2 f 9 9 9 9 9 9 9 7 9 7 9 7 
        f 9 9 f 9 9 f f f f 9 9 7 7 7 f 
        f 9 9 f 9 f 6 d d 6 f 9 9 1 9 f 
        f 9 f 9 9 f f d d f f 9 1 f 9 f 
        f 9 9 f 9 f d d d d f 9 d 9 9 f 
        . f 9 9 f f f b b f f d d 9 f . 
        . f 9 9 f d b 9 9 b d d 9 9 f . 
        f 9 9 f d d b b 9 b f . f 9 9 f 
        . f f d d f b b 9 b f . . f f . 
        . . f f f f c c c c f . . . . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f d d b d f . . . . . 
        . . . . . f c c a c f . . . . . 
        `],
    500,
    true
    )
    pause(5000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
        if (LostSoul == true) {
            timer.after(500, function () {
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
                LostSoul = false
            })
            pause(100)
            timer.after(10000, function () {
                LostSoul = true
            })
        }
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
        if (LostSoul == true) {
            timer.after(500, function () {
                chargeblast = sprites.createProjectileFromSprite(img`
                    . 1 . . . . 1 9 1 . . . . 1 . . 
                    1 9 1 . . . 1 9 1 . . . 1 9 1 . 
                    . 1 9 1 . . 9 9 9 . . 1 9 1 . . 
                    . . 1 9 1 . 9 9 9 . 1 9 1 . . . 
                    . . . 1 9 9 9 9 9 9 9 1 . . . . 
                    . . . . 9 9 9 9 9 9 9 . . . . . 
                    1 1 9 9 9 9 1 1 1 9 9 9 9 1 1 1 
                    9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 
                    1 1 9 9 9 9 1 1 1 9 9 9 9 1 1 1 
                    . . . . 9 9 9 9 9 9 9 . . . . . 
                    . . . 1 9 9 9 9 9 9 9 1 . . . . 
                    . . 1 9 1 . 9 9 9 . 1 9 1 . . . 
                    . 1 9 . . . 9 9 9 . . 1 9 1 . . 
                    1 9 1 . . . 9 9 9 . . . 1 9 1 . 
                    . 1 . . . . 1 9 1 . . . . 1 . . 
                    . . . . . . 1 9 1 . . . . . . . 
                    `, obsidian, 80, 0)
                LostSoul = false
            })
            pause(100)
            timer.after(10000, function () {
                LostSoul = true
            })
        }
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        if (LostSoul == true) {
            timer.after(500, function () {
                chargeblast = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . f . . . . . . . . . . . . . . 
                    f . . . . . . . . . . . . . . . 
                    . . . . f f f f f f f f f f f . 
                    f . f f f f f f f f f f f f f f 
                    . f . f f f f f f f f f 1 1 f 1 
                    f . f f f f f f f f f f 1 1 f 1 
                    . f . f f f f f f f f f f f f f 
                    f . f f f f f f f f f f f f f f 
                    . . . . f f f f f f f f f f f . 
                    f . . . . . . . . . . . . . . . 
                    . . f . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, 80, 0)
                LostSoul = false
            })
            pause(100)
            timer.after(10000, function () {
                LostSoul = true
            })
        }
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        if (LostSoul == true) {
            animation.stopAnimation(animation.AnimationTypes.All, obsidian)
            music.play(music.createSong(hex`005a000408010201001c000f05001202c102c20100040500280000006400280003140006020004120004000800015810001400015c1c002000015f02001c000c960064006d019001000478002c010000640032000000000a06000514000400080001291000140001291c0020000324292c`), music.PlaybackMode.InBackground)
            obsidian.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f 2 2 2 2 2 f 5 9 5 . . . . . 
                . f 2 2 2 2 2 f 5 b 5 b 5 . . . 
                . f 2 2 2 2 2 f 5 9 5 . 5 b . . 
                b f 2 2 2 2 2 f 5 b 5 b 5 . . . 
                b f 2 2 2 2 2 f 5 9 5 . . . . . 
                b b b b b b b b b b b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                . e b e . . . e b e . . . . . . 
                . e e e . . . e e e . . . . . . 
                `)
            pause(1000)
            obsidian.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f 2 2 2 2 2 f 5 9 5 9 . . . . 
                . f 2 2 2 2 2 f 5 b 5 b 5 . . . 
                . f 2 2 2 2 2 f 5 9 5 9 5 b . . 
                b f 2 2 2 2 2 f 5 b 5 b 5 . . . 
                b f 2 2 2 2 2 f 5 9 5 9 . . . . 
                b b b b b b b b b b b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                . e b e . . . e b e . . . . . . 
                . e e e . . . e e e . . . . . . 
                `)
            pause(1000)
            obsidian.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f 2 2 2 2 2 f 5 9 5 9 . . . . 
                . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
                . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
                b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
                b f 2 2 2 2 2 f 5 9 5 9 . . . . 
                b b b b b b b b b b b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                e e e e e e e e e e b b b . . . 
                e e e e e e e e e e b b b b . . 
                . e b e . . . e b e . . . . . . 
                . e e e . . . e e e . . . . . . 
                `)
            pause(1000)
            chargeblast = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 9 . 9 9 9 . 
                . . . . . . . . . 9 . 9 . . . 9 
                . . . . . . . . . . . . . . . 9 
                . . . . . . . . . . 9 9 9 9 9 9 
                . . . . . . . . . . 9 9 9 9 9 9 
                . . . . . . . . . 9 9 9 9 9 9 9 
                . . 9 9 9 . . . . 9 9 9 9 9 9 9 
                9 9 9 . . 9 9 . 9 9 9 9 9 9 9 9 
                . . . . . . 9 9 9 . 9 9 9 9 9 9 
                . . . . . . . . . . 9 9 9 9 9 9 
                . . . . . . . . . . 9 9 9 9 9 9 
                . . . . . . . . . . . . . . . 9 
                . . . . . . . . . 9 . 9 . . . 9 
                . . . . . . . . . . 9 . 9 9 9 . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 80, 0)
            LostSoul = false
            timer.after(10000, function () {
                LostSoul = true
            })
        }
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finale_Ultima_Boss_Phase_2, function (sprite254, otherSprite5) {
    sprites.destroy(sprite254)
    sprites.changeDataNumberBy(otherSprite5, "HP", -10)
    if (sprites.readDataNumber(otherSprite5, "HP") <= 0) {
        sprites.destroy(otherSprite5)
        info.changeScoreBy(1000)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
    }
})
info.onScore(1000, function () {
    info.setLife(225)
    controller.moveSprite(obsidian, 95, 95)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite15, location10) {
    tiles.setCurrentTilemap(tilemap`level6`)
    sprites.destroyAllSpritesOfKind(SpriteKind.goldnpc)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(123, 253))
})
scene.onOverlapTile(SpriteKind.t3enemy, assets.tile`transparency16`, function (sprite4, location3) {
    sprites.destroy(sprite4)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        if (shards == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 9 . . 9 9 9 . . . . . . . 
                9 . 9 . 9 9 9 9 9 . . . . . . . 
                . 9 . . 9 . 9 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        if (shards == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 1 . . . . . . . . . . . . . . 
                1 . . 1 . . . . . . . . . . . . 
                . . . . . 1 1 1 1 1 1 1 1 1 1 . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . . . 1 1 1 1 1 1 1 1 1 f f 1 f 
                . . 1 1 1 1 1 1 1 1 1 1 f f 1 f 
                . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 . . . . 1 1 1 1 1 1 1 1 1 1 . 
                . . . 1 . . . . . . . . . . . . 
                . . 1 . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, obsidian, 110, 0)
            shards = false
            timer.after(250, function () {
                shards = true
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite256, otherSprite7) {
    sprites.destroy(sprite256)
    sprites.changeDataNumberBy(otherSprite7, "HP", -10)
    if (sprites.readDataNumber(otherSprite7, "HP") <= 0) {
        sprites.destroy(otherSprite7)
        info.changeScoreBy(1000)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile22`, function (sprite3, location2) {
    sprites.destroy(sprite3)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function (sprite8, location5) {
    sprites.destroy(sprite8)
})
info.onScore(1700, function () {
    info.setLife(325)
    controller.moveSprite(obsidian, 110, 110)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stopper, function (sprite, otherSprite) {
    if (info.score() >= 2000 && sprites.readDataNumber(obsidian, "Bosses Slain") == 4) {
        otherSprite.sayText("you are ready. kill the entity.", 2000, true)
    } else {
        otherSprite.sayText("you are not yet ready. BEGONE!", 500, true)
        tiles.placeOnTile(obsidian, tiles.getTileLocation(133, 126))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . f 5 5 f f f f . . . . . . 
            . . f b b 5 5 5 f 5 f f . . . . 
            . . f 9 9 b 5 5 5 5 5 5 f . . . 
            . . f b b 5 b 5 5 5 5 5 5 f . . 
            . . f 5 5 b b 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 d d f d f 5 5 5 5 f . . 
            . f 5 f d d 6 f f 5 5 5 5 f . . 
            . . f f d d 6 d f 5 5 5 5 f . . 
            . . . f d d d d f 5 5 5 5 f f . 
            . . . f f f f f f f 5 5 5 5 f . 
            . . . f 9 9 9 f d d f 5 5 f . . 
            . . . f 9 9 9 f d d f f f . . . 
            . . f f 8 9 8 f 8 9 f f . . . . 
            . . f f f 8 9 8 9 8 f f . . . . 
            . . . . f 9 8 9 8 f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . f b b 5 5 5 f 5 f f . . . . 
            . . f 9 9 b 5 5 5 5 5 5 f . . . 
            . . f b b 5 b 5 5 5 5 5 5 f . . 
            . f 5 5 5 b b 5 5 5 5 5 5 f . . 
            . f 5 5 f f 5 5 5 5 5 5 5 f . . 
            . f 5 5 d d f f f 5 5 5 5 f . . 
            . . f f d d 6 1 f 5 5 5 5 f f . 
            . . . f d d 6 1 f 5 5 5 5 5 f . 
            . . . f d d d d f 5 5 5 5 5 f . 
            . . . f f f f f d d 5 5 5 f . . 
            . . . f 9 9 9 f d d f f f . . . 
            . . f 9 9 9 9 9 f f 9 9 f . . . 
            . . f 8 9 8 9 8 9 8 f f . . . . 
            . . . f 8 9 8 9 8 f f . . . . . 
            `,img`
            . . . f 5 5 f f f f . . . . . . 
            . . f b b 5 5 5 f 5 f f . . . . 
            . . f 9 9 b 5 5 5 5 5 5 f . . . 
            . . f b b 5 b 5 5 5 5 5 5 f . . 
            . . f 5 5 b b 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 d d f d f 5 5 5 5 f . . 
            . f 5 f d d 6 f f 5 5 5 5 f . . 
            . . f f d d 6 1 f 5 5 5 5 f . . 
            . . . f d d d d f 5 5 5 5 f f . 
            . . . f f f f f f f 5 5 5 5 f . 
            . . . f 9 9 9 f d d f 5 5 f . . 
            . . . f 9 9 9 f d d f f f . . . 
            . . f f 8 9 8 9 8 9 f f . . . . 
            . . f f 9 8 9 8 9 8 f f . . . . 
            . . . . f f 8 9 8 f . . . . . . 
            `],
        600,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . 1 . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . b 1 1 1 1 1 . . . . . . . 
            . . . . b c c c . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . f . . f . b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . 1 . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . b 1 1 1 1 1 . . . . . . . 
            . . . . b c c c . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . f . . . f . b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . 1 . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . b 1 1 1 1 1 . . . . . . . 
            . . . . b c c c . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . f . . f . b . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 1 . . . 1 . . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 . . . . . 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 f 1 1 f 1 1 . . . . . . 
            . . . 1 1 1 1 1 1 1 . . . . . . 
            . . . b 1 1 1 1 1 . . . . . . . 
            . . . . b c c c . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . f . . . f . b . . . . . . 
            `],
        500,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 5 9 5 f 2 2 2 2 2 f . 
            . . 9 5 b 5 b 5 f 2 2 2 2 2 f . 
            . 9 b 5 9 5 9 5 f 2 2 2 2 2 f . 
            . . 9 5 b 5 b 5 f 2 2 2 2 2 f b 
            . . . . 9 5 9 5 f 2 2 2 2 2 f b 
            . . b b b b b b b b b b b b b b 
            . . . b b b e e e e e e e e e e 
            . . b b b b e e e e e e e e e e 
            . . . b b b e e e e e e e e e e 
            . . b b b b e e e e e e e e e e 
            . . . . . . e b e . . . e b e . 
            . . . . . . e e e . . . e e e . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 . 9 . . . . . . . . 
            . . . . 9 5 9 5 f 2 2 2 2 2 f . 
            . . 9 5 b 5 b 5 f 2 2 2 2 2 f . 
            . 9 b 5 9 5 9 5 f 2 2 2 2 2 f . 
            . . 9 5 b 5 b 5 f 2 2 2 2 2 f b 
            . . . . 9 5 9 5 f 2 2 2 2 2 f b 
            . . b b b b b b b b b b b b b b 
            . . . b b b e e e e e e e e e e 
            . . b b b b e e e e e e e e e e 
            . . . b b b e e e e e e e e e e 
            . . b b b b e e e e e e e e e e 
            . . . . . . . e e f f . e e f f 
            . . . . . . . e b e . . e b e . 
            . . . . . . . . e e f . . e e f 
            `],
        500,
        true
        )
    }
})
controller.combos.attachCombo("a+b", function () {
    if (bleh == false) {
        if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
        if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
            animation.runImageAnimation(
            obsidian,
            [img`
                . . . . . f f 5 5 f f . . . . . 
                . . . . f b 5 b b 5 b f . . . . 
                . . . f 5 b b 9 9 b b 5 f . . . 
                . . f 5 b 9 9 b b 9 9 b 5 f . . 
                . . f b 5 b b 9 9 b b 5 b f . . 
                . f 5 5 b b f b b f b b 5 5 f . 
                . f 5 5 f 5 5 f f 5 5 f 5 5 f . 
                . f 5 5 d f f d d f f d 5 5 f . 
                . f 5 9 f 6 6 d d 6 6 f 9 5 f . 
                f f 5 5 d d d d d d d d 5 5 f f 
                f 9 6 6 d d d f f d d d 6 6 9 f 
                . f 6 6 8 8 9 9 9 9 8 8 6 6 f . 
                . . f 8 8 9 9 9 9 9 9 8 8 f . . 
                . . f f 9 8 8 8 8 8 8 9 f f . . 
                . . . f f 9 9 9 9 9 9 f f . . . 
                . . . . f 8 8 9 9 8 8 f f . . . 
                `,img`
                . . . . . f f 5 5 f f . . . . . 
                . . . . f b 5 b b 5 b f . . . . 
                . . . f 5 b b 9 9 b b 5 f . . . 
                . . f 5 b 9 9 b b 9 9 b 5 f . . 
                . . f b 5 b b 9 9 b b 5 b f . . 
                . f 5 5 b b 5 b b 5 b b 5 5 f . 
                . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
                . f 5 5 d f f d d f f d 5 5 f . 
                . f 5 9 d 1 6 d d 6 1 d 9 5 f . 
                f f 5 5 d d d d d d d d 5 5 f f 
                f 9 1 1 d d d f f d d d 1 1 9 f 
                . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
                . . f 8 8 9 9 9 9 9 9 8 8 f . . 
                . . f f 9 8 8 8 8 8 8 9 f f . . 
                . . . f f 9 9 9 9 9 9 f f . . . 
                . . . . f 8 8 9 9 8 8 f . . . . 
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
                    9 9 . . . . . . . . . . . . . . 
                    9 9 9 9 9 . . . . . . . . . . . 
                    9 9 9 9 9 9 9 9 . . . . . . . . 
                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                    9 9 9 9 9 9 9 9 . . . . . . . . 
                    9 9 9 9 9 . . . . . . . . . . . 
                    9 9 . . . . . . . . . . . . . . 
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
                    . . . . . . . . . . . . 9 9 . . 
                    . . . . . . . . . 9 9 9 9 9 . . 
                    . . . . . . 9 9 9 9 9 9 9 9 . . 
                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                    9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                    . . . . . . 9 9 9 9 9 9 9 9 . . 
                    . . . . . . . . . 9 9 9 9 9 . . 
                    . . . . . . . . . . . . 9 9 . . 
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
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 9 9 . . . . . . 
                    . . . . . . . 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . 9 9 9 . . . . . . . . . 
                    9 . . 9 9 9 . . . . . . . . . . 
                    9 9 9 9 9 . . . . . . . . . . . 
                    . 9 9 9 . . . . . . . . . . . . 
                    9 9 9 9 . . . . . . . . . . . . 
                    9 9 . 9 9 . . . . . . . . . . . 
                    `, obsidian, 110, -110)
                projectile = sprites.createProjectileFromSprite(img`
                    9 9 . 9 9 . . . . . . . . . . . 
                    9 9 9 9 . . . . . . . . . . . . 
                    . 9 9 9 . . . . . . . . . . . . 
                    9 9 9 9 9 . . . . . . . . . . . 
                    9 . . 9 9 9 . . . . . . . . . . 
                    . . . . 9 9 9 . . . . . . . . . 
                    . . . . . 9 9 9 . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . 9 9 9 . . . . . . 
                    . . . . . . . . 9 9 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, 110, 110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . 9 9 . 9 9 
                    . . . . . . . . . . . . 9 9 9 9 
                    . . . . . . . . . . . . 9 9 9 . 
                    . . . . . . . . . . . 9 9 9 9 9 
                    . . . . . . . . . . 9 9 9 . . 9 
                    . . . . . . . . . 9 9 9 . . . . 
                    . . . . . . . . 9 9 9 . . . . . 
                    . . . . . . . 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . 9 9 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
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
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 9 9 . . . . . . . . 
                    . . . . . . 9 9 9 . . . . . . . 
                    . . . . . . . 9 9 9 . . . . . . 
                    . . . . . . . . 9 9 9 . . . . . 
                    . . . . . . . . . 9 9 9 . . . . 
                    . . . . . . . . . . 9 9 9 . . 9 
                    . . . . . . . . . . . 9 9 9 9 9 
                    . . . . . . . . . . . . 9 9 9 . 
                    . . . . . . . . . . . . 9 9 9 9 
                    . . . . . . . . . . . 9 9 . 9 9 
                    `, obsidian, -110, -110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    `, obsidian, 0, 110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . . 9 9 . . . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . . 9 9 9 9 . . . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . . 9 9 9 9 9 9 . . . . . 
                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                    . . . . 9 9 9 9 9 9 9 9 . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, 0, -110)
                bleh = true
                info.startCountdown(60)
            })
        }
        if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
            animation.runImageAnimation(
            obsidian,
            [img`
                . . . . f . . . . f . . . . . . 
                . . . f . . . . . . f . . . . . 
                . . . f . . . . . . f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 1 1 f f 1 1 f . . . . . 
                . . . f 1 1 f f 1 1 f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . f f f f . . . . . . . 
                f f f . f f f f f f . f f f f . 
                f . f f f f f f f f f f . . f . 
                . . f f f f f f f f f . . . . . 
                . . f . f f f f f f . f f . . . 
                . f . f . f f . f . f . . f . . 
                . f . . f . . f . f . . f . f . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f . . . . f . . . . . . 
                . . . f . . . . . . f . . . . . 
                . . . f . . . . . . f . . . . . 
                . . . f f f f f f f f . . . . . 
                . . . f 1 1 f f 1 1 f . . . . . 
                . . . f 1 1 f f 1 1 f . . . . . 
                . . . f f f f f f f f . . . . . 
                . f . f f f f f f f f . . . . . 
                . . f . f f f f f f . . . . . . 
                . . . f f f f f f . . . . . . . 
                . . . f f f f f f f . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . f . . f . f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 1 . . . . 1 . . . . . . 
                . . . 1 . . . . . . 1 . . . . . 
                . . . 1 . . . . . . 1 . . . . . 
                . . . 1 1 1 1 1 1 1 1 . . . . . 
                . . . 1 1 1 1 1 1 1 1 . . . . . 
                . . . 1 f f 1 1 f f 1 . . . . . 
                . . . 1 f f 1 1 f f 1 . . . . . 
                . b . 1 1 1 1 1 1 1 1 . . . . . 
                . . b . 1 1 1 1 1 1 . . . . . . 
                . . . b b f f c c . . . . . . . 
                . . . b c c f c c c . . . . . . 
                . . . . c c f c c c . . . . . . 
                . . . . c c c f c c . . . . . . 
                . . . . c c c f c c . . . . . . 
                . . . . . f . . f . b . . . . . 
                `],
            1000,
            false
            )
            timer.after(1, function () {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    1 . . . . . . . . . . . . . . . 
                    . . 1 . . . . . . . . . . . . . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . 1 1 1 1 1 1 1 1 1 f f 1 f . 
                    . 1 1 1 1 1 1 1 1 1 1 f f 1 f . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . . 1 . . . . . . . . . . . . . 
                    . 1 . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, 110, 0)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 1 . 
                    . . . . . . . . . . . . 1 . . 1 
                    . 1 1 1 1 1 1 1 1 1 1 . . . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    f 1 f f 1 1 1 1 1 1 1 1 1 . . . 
                    f 1 f f 1 1 1 1 1 1 1 1 1 1 . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    . 1 1 1 1 1 1 1 1 1 1 . . . . 1 
                    . . . . . . . . . . . . 1 . . . 
                    . . . . . . . . . . . . . 1 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, -110, 0)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . b . . . . . 
                    . . . . . . . . . b . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . b b b b . . . . . . . 
                    . . . . b b b b . . . . . . . . 
                    . . . b b b b b . . . . . . . . 
                    b b b b b b b . . . . . . . . . 
                    b b b b b b . . . . . . . . . . 
                    . b b b b . . . . . . . . . . . 
                    . b b b b . . . . . . . . . . . 
                    b . . b b . . . . . . . . . . . 
                    `, obsidian, 110, -110)
                projectile = sprites.createProjectileFromSprite(img`
                    b . . b b . . . . . . . . . . . 
                    . b b b b . . . . . . . . . . . 
                    . b b b b . . . . . . . . . . . 
                    b b b b b b . . . . . . . . . . 
                    b b b b b b b . . . . . . . . . 
                    . . . b b b b b . . . . . . . . 
                    . . . . b b b b . . . . . . . . 
                    . . . . . b b b b . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . . . . b . . . . . . 
                    . . . . . . . . . . b . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, obsidian, 110, 110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . b b . . b 
                    . . . . . . . . . . . b b b b . 
                    . . . . . . . . . . . b b b b . 
                    . . . . . . . . . . b b b b b b 
                    . . . . . . . . . b b b b b b b 
                    . . . . . . . . b b b b b . . . 
                    . . . . . . . . b b b b . . . . 
                    . . . . . . . b b b b . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . b . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
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
                    . . . . . b . . . . . . . . . . 
                    . . . . . . b . . . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . . b b b b . . . . . 
                    . . . . . . . . b b b b . . . . 
                    . . . . . . . . b b b b b . . . 
                    . . . . . . . . . b b b b b b b 
                    . . . . . . . . . . b b b b b b 
                    . . . . . . . . . . . b b b b . 
                    . . . . . . . . . . . b b b b . 
                    . . . . . . . . . . . b b . . b 
                    `, obsidian, -110, -110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . 1 . . . . . . 1 . . . . 
                    . . . . . . . . . . . . 1 . . . 
                    . . 1 . . 1 . 1 . 1 . . . . . . 
                    . . . 1 . 1 1 1 1 1 . 1 . . . . 
                    . . . . . 1 1 1 1 1 . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 f f 1 1 . . . . . 
                    . . . . 1 1 1 f f 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . 1 1 f f 1 . . . . . . 
                    `, obsidian, 0, 110)
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . 1 f f 1 1 . . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 f f 1 1 1 . . . . . 
                    . . . . 1 1 f f 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . . 1 1 1 1 1 . . . . . . 
                    . . . 1 . 1 1 1 1 1 . 1 . . . . 
                    . . . . . 1 . 1 . 1 . . 1 . . . 
                    . . 1 . . . . . . . . . . . . . 
                    . . . 1 . . . . . . 1 . . . . . 
                    `, obsidian, 0, -110)
                bleh = true
                info.startCountdown(60)
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cosmetic2, function (sprite, otherSprite) {
    if (info.score() >= 1000) {
        obsidian.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . b . 1 1 1 1 1 1 1 1 . . . . 
            . . . b . 1 1 1 1 1 1 . . . . . 
            . . . . b b f f c c . . . . . . 
            . . . . b c c f c c c . . . . . 
            . . . . . c c f c c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . . f . . f . b . . . . 
            `)
        sprites.setDataNumber(obsidian, "CosmeticPoints", 2)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite6, location4) {
    tiles.setCurrentTilemap(tilemap`level9`)
    mySprite3 = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f 8 6 e 4 4 4 4 e 6 8 f . . 
        . . f 6 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 6 e 6 6 e e 6 6 e 6 6 f . 
        . f 6 6 f f e e e e f f 6 6 f . 
        . f 8 8 f 6 5 e e 5 6 f 8 8 f . 
        . f 8 8 e 1 5 4 4 5 1 e 8 8 f . 
        f f 8 8 f 4 4 4 4 4 4 f 8 8 f f 
        f 8 8 f f f e e e e f f f 8 8 f 
        . f e e f 6 9 9 9 9 6 f e e f . 
        . . e 4 c 9 9 9 9 9 9 c 4 e . . 
        . . e f 6 9 6 9 6 9 6 6 f e . . 
        . . . f f 8 9 8 9 8 9 f f . . . 
        . . . . . f f 6 6 f f . . . . . 
        `, SpriteKind.goldnpc)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(81, 97))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(79, 94))
    sprites.setDataNumber(mySprite3, "npc", 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.t2enemy, function (sprite272, otherSprite22) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
scene.onOverlapTile(SpriteKind.t2enemy, assets.tile`myTile81`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite274, otherSprite24) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-25)
        timer.after(1250, function () {
            isInvincible = false
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.miniboss, function (sprite276, otherSprite26) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-10)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onCountdownEnd(function () {
    bleh = false
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cosmetic_peak, function (sprite, otherSprite) {
    if (info.score() >= 1500) {
        obsidian.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f 2 2 2 2 2 f 5 9 5 9 . . . . 
            . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
            b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            b f 2 2 2 2 2 f 5 9 5 9 . . . . 
            b b b b b b b b b b b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            . e b e . . . e b e . . . . . . 
            . e e e . . . e e e . . . . . . 
            `)
        sprites.setDataNumber(obsidian, "CosmeticPoints", 3)
    }
})
sprites.onCreated(SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite11) {
    sprites.setDataNumber(sprite11, "HP", 1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite4, location3) {
    tiles.setCurrentTilemap(tilemap`level6`)
    sprites.destroy(miku)
    sprites.destroy(lancer)
    sprites.destroy(knight)
    sprites.destroy(sparky)
    sprites.destroy(Maddie)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(127, 127))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goldnpc, function (sprite, otherSprite) {
    if (sprites.readDataNumber(mySprite3, "npc") == 1) {
        mySprite3.sayText("filthy gemstone scum.. begone!")
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . f f f f 5 5 f . . . 
            . . . . f f 5 f 5 5 5 b b f . . 
            . . . f 5 5 5 5 5 5 b 9 9 f . . 
            . . f 5 5 5 5 5 5 b 5 b b f . . 
            . . f 5 5 5 5 5 5 b b 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 f d f d d 5 5 f . 
            . . f 5 5 5 5 f f 6 d d f 5 f . 
            . . f 5 5 5 5 f 1 6 d d f f . . 
            . f f 5 5 5 5 f d d d d f . . . 
            . f 5 5 5 5 f f f f f f f . . . 
            . . f 5 5 f d d f 9 9 9 f . . . 
            . . . f f f d d f 9 9 9 f . . . 
            . . . . f f f 8 f 8 f 8 f f . . 
            . . . . f f 8 f 8 f 8 f f f . . 
            . . . . . . f 8 f 8 f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f f . . . 
            . . . . f f 5 f 5 5 5 b b f . . 
            . . . f 5 5 5 5 5 5 b 9 9 f . . 
            . . f 5 5 5 5 5 5 b 5 b b f . . 
            . . f 5 5 5 5 5 5 b b 5 5 5 f . 
            . . f 5 5 5 5 5 5 5 f f 5 5 f . 
            . . f 5 5 5 5 f f f d d 5 5 f . 
            . f f 5 5 5 5 f 1 6 d d f f . . 
            . f 5 5 5 5 5 f 1 6 d d f . . . 
            . f 5 5 5 5 5 f d d d d f . . . 
            . . f 5 5 5 d d f f f f f . . . 
            . . . f f f d d f 9 9 9 f . . . 
            . . . f 9 9 f f 9 9 9 9 9 f . . 
            . . . . f f 8 f 8 f 8 f 8 f . . 
            . . . . . f f 8 f 8 f 8 f . . . 
            `,img`
            . . . . . . f f f f 5 5 f . . . 
            . . . . f f 5 f 5 5 5 b b f . . 
            . . . f 5 5 5 5 5 5 b 9 9 f . . 
            . . f 5 5 5 5 5 5 b 5 b b f . . 
            . . f 5 5 5 5 5 5 b b 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
            . . f 5 5 5 5 f d f d d 5 5 f . 
            . . f 5 5 5 5 f f 6 d d f 5 f . 
            . . f 5 5 5 5 f 1 6 d d f f . . 
            . f f 5 5 5 5 f d d d d f . . . 
            . f 5 5 5 5 f f f f f f f . . . 
            . . f 5 5 f d d f 9 9 9 f . . . 
            . . . f f f d d f 9 9 9 f . . . 
            . . . . f f f 8 f 8 f 8 f f . . 
            . . . . f f 8 f 8 f 8 f f f . . 
            . . . . . . f 8 f 8 f f . . . . 
            `],
        600,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . 1 . . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 b . . . 
            . . . . . . . . c c c b . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . b . f . . f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . 1 . . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 b . . . 
            . . . . . . . . c c c b . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . b . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . 1 . . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 b . . . 
            . . . . . . . . c c c b . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . b . f . . f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . 1 . . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 . . . . . 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 f 1 1 f 1 . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . . 1 1 1 1 1 b . . . 
            . . . . . . . . c c c b . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . b . f . . . f . . . 
            `],
        500,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f 2 2 2 2 2 f 5 9 5 9 . . . . 
            . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
            b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            b f 2 2 2 2 2 f 5 9 5 9 . . . . 
            b b b b b b b b b b b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            . e b e . . . e b e . . . . . . 
            . e e e . . . e e e . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f 2 2 2 2 2 f 5 9 5 9 . . . . 
            . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
            b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            b f 2 2 2 2 2 f 5 9 5 9 . . . . 
            b b b b b b b b b b b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            f f e e . f f e e . . . . . . . 
            . e b e . . e b e . . . . . . . 
            f e e . . f e e . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f 2 2 2 2 2 f 5 9 5 9 . . . . 
            . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
            b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
            b f 2 2 2 2 2 f 5 9 5 9 . . . . 
            b b b b b b b b b b b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            e e e e e e e e e e b b b . . . 
            e e e e e e e e e e b b b b . . 
            . e b e . . . e b e . . . . . . 
            . e e e . . . e e e . . . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.t3enemy, function (sprite275, otherSprite25) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onScore(2500, function () {
    info.setLife(400)
    controller.moveSprite(obsidian, 130, 130)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite14, location9) {
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.t2enemy, function (sprite257, otherSprite8) {
    sprites.destroy(projectile)
    sprites.changeDataNumberBy(otherSprite8, "HP", -14)
    if (sprites.readDataNumber(otherSprite8, "HP") <= 0) {
        sprites.destroy(otherSprite8)
        info.changeLifeBy(2)
        info.changeScoreBy(10)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite252, otherSprite3) {
    sprites.changeDataNumberBy(otherSprite3, "HP", -10)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite3, "HP") <= 0) {
        sprites.destroy(otherSprite3)
        info.changeScoreBy(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.goldnpc)
    shopkeeper = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f f 5 5 f f f . . . 
        . . f 5 5 5 f f 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 f f 7 7 f f 5 5 f . 
        f 5 5 f 9 9 f f 9 9 f 5 5 f 
        f 5 5 7 f f 4 4 f f 7 5 5 f 
        f 7 7 f 1 5 4 4 5 1 f 7 7 f 
        f 7 7 4 1 5 d d 5 1 4 7 7 f 
        . f 7 f d d d d d d f 7 f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 7 5 5 5 5 7 f 4 e . 
        . 4 f f 5 5 5 5 5 5 f f 4 . 
        . 4 f 5 7 5 7 5 7 5 5 f 4 . 
        . . f f 7 5 7 5 7 7 f f . . 
        . . . . f f 5 5 f f . . . . 
        `, SpriteKind.shopnpc)
    animation.runImageAnimation(
    shopkeeper,
    [img`
        . . . . . f f f f . . . . . . . 
        . . . f f f 5 5 f f f . . . . . 
        . . f 5 5 5 f f 5 5 5 f . . . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 f f 7 7 f f 5 5 f . . . 
        f 5 5 f 9 9 f f 9 9 f 5 5 f . . 
        f 5 5 7 f f 4 4 f f 7 5 5 f . . 
        f 7 7 f 1 5 4 4 5 1 f 7 7 f . . 
        f 7 7 4 1 5 d d 5 1 4 7 7 f . . 
        . f 7 f d d d d d d f 7 f . . . 
        . f e f e 4 4 4 4 e f e f . . . 
        . e 4 f 7 5 5 5 5 7 f 4 e . . . 
        . 4 f f 5 5 5 5 5 5 f f 4 . . . 
        . 4 f 5 7 5 7 5 7 5 5 f 4 . . . 
        . . f f 7 5 7 5 7 7 f f . . . . 
        . . . . f f 5 5 f f . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f 5 5 5 5 f f . . . . . 
        . . f 5 5 5 5 5 5 5 5 f . . . . 
        . f 5 5 5 f 5 5 f 5 5 5 f . . . 
        . f 5 5 7 7 f f 7 7 5 5 f . f . 
        f 5 5 7 7 7 7 7 7 7 7 5 5 f . . 
        f 5 5 7 f f 4 4 f f 7 5 5 f . . 
        f 7 7 f 9 9 f f 9 9 f 7 7 f . . 
        f 7 7 4 f f d d f f 4 7 7 f . . 
        . f 7 f d d d d d d f 7 f . . . 
        . f e f e 4 4 4 4 e f e f . . . 
        . e 4 f 7 5 5 5 5 7 f 4 e . . . 
        . 4 f f 5 5 5 5 5 5 f f 4 . . . 
        . 4 f 5 7 5 7 5 7 5 5 f 4 . . . 
        . . f f 7 5 7 5 7 7 f f . . . . 
        . . . . f f 5 5 f f . . . . . . 
        `,img`
        . . . . . f f f f . . . . . f . 
        . . . f f 5 5 5 5 f f . . . f . 
        . . f 5 5 5 5 5 5 5 5 f . . f . 
        . f 5 5 5 f 5 5 f 5 5 5 f . . . 
        . f 5 5 7 7 f f 7 7 5 5 f . f . 
        f 5 5 7 7 7 7 7 7 7 7 5 5 f . . 
        f 5 5 7 f f 4 4 f f 7 5 5 f . . 
        f 7 7 f 9 9 f f 9 9 f 7 7 f . . 
        f 7 7 4 f f d d f f 4 7 7 f . . 
        . f 7 f d d d d d d f 7 f . . . 
        . f e f e 4 4 4 4 e f e f . . . 
        . e 4 f 7 5 5 5 5 7 f 4 e . . . 
        . 4 f f 5 5 5 5 5 5 f f 4 . . . 
        . 4 f 5 7 5 7 5 7 5 5 f 4 . . . 
        . . f f 7 5 7 5 7 7 f f . . . . 
        . . . . f f 5 5 f f . . . . . . 
        `],
    500,
    true
    )
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(9, 14))
    tiles.placeOnTile(shopkeeper, tiles.getTileLocation(7, 9))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite4, location3) {
    tiles.setCurrentTilemap(tilemap`level6`)
    sprites.destroy(miku)
    sprites.destroy(lancer)
    sprites.destroy(knight)
    sprites.destroy(sparky)
    sprites.destroy(Maddie)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(127, 127))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 0) {
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
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 1) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . f f 5 5 f f . . . . . 
            . . . . f b 5 b b 5 b f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . . f b 5 b b 9 9 b b 5 b f . . 
            . f 5 5 b b 5 b b 5 b b 5 5 f . 
            . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            . f 5 9 f 1 6 d d 6 1 f 9 5 f . 
            f f 5 5 d d d d d d d d 5 5 f f 
            f 9 1 1 d d d f f d d d 1 1 9 f 
            . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
            . . f 8 8 9 9 9 9 9 9 8 8 f . . 
            . . f f 9 8 8 8 8 8 8 9 f f . . 
            . . . f f 9 9 9 9 9 9 f f . . . 
            . . . . f 8 8 9 9 8 8 f . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . f 5 5 b b 5 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . f 5 b 5 b b 9 9 b b 5 b 5 f . 
            . f b 5 f 5 5 b b 5 5 f 5 b f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            f f 5 5 f 1 6 d d 6 1 f 5 5 f f 
            f 5 5 5 d d d d d d d d 5 5 5 f 
            . f 5 5 f f d f f d d d 5 5 f . 
            . . f d d d f 9 9 9 8 f f f . . 
            . . f f d d f 9 9 9 9 8 d f . . 
            . . . f f f 9 9 8 9 8 8 f f . . 
            . . . f f f 9 9 8 9 8 9 f . . . 
            . . . . f f 9 8 9 8 9 8 f . . . 
            `,img`
            . . . . . f f 5 5 f f . . . . . 
            . . . . f b 5 b b 5 b f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . . f b 5 b b 9 9 b b 5 b f . . 
            . f 5 5 b b 5 b b 5 b b 5 5 f . 
            . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            . f 5 9 f 1 6 d d 6 1 f 9 5 f . 
            f f 5 5 d d d d d d d d 5 5 f f 
            f 9 1 1 d d d f f d d d 1 1 9 f 
            . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
            . . f 8 8 9 9 9 9 9 9 8 8 f . . 
            . . f f 9 8 8 8 8 8 8 9 f f . . 
            . . . f f 9 9 9 9 9 9 f f . . . 
            . . . . f 8 8 9 9 8 8 f . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . f f 5 5 f f . . . . . 
            . . . . f 5 5 b b 5 5 f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . f 5 b 5 b b 9 9 b b 5 b 5 f . 
            . f b 5 f 5 5 b b 5 5 f 5 b f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            f f 5 5 f 1 6 d d 6 1 f 5 5 f f 
            f 5 5 5 d d d d d d d d 5 5 5 f 
            . f 5 5 d d d f f d f f 5 5 f . 
            . . f f f 8 9 9 9 f d d d f . . 
            . . f d 8 9 9 9 9 f d d f f . . 
            . . f f 8 8 9 8 9 9 f f f . . . 
            . . . f 9 8 9 8 9 9 f f f . . . 
            . . . f 8 9 8 9 8 f f f . . . . 
            `,img`
            . . . . . f f 5 5 f f . . . . . 
            . . . . f b 5 b b 5 b f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . . f b 5 b b 9 9 b b 5 b f . . 
            . f 5 5 b b 5 b b 5 b b 5 5 f . 
            . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            . f 5 9 f 1 6 d d 6 1 f 9 5 f . 
            f f 5 5 d d d d d d d d 5 5 f f 
            f 9 1 1 d d d f f d d d 1 1 9 f 
            . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
            . . f 8 8 9 9 9 9 9 9 8 8 f . . 
            . . f f 9 8 8 8 8 8 8 9 f f . . 
            . . . f f 9 9 9 9 9 9 f f . . . 
            . . . . f 8 8 9 9 8 8 f . . . . 
            `],
        600,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 3) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 9 b 9 . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . 9 5 5 5 5 5 9 . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . 9 5 5 5 5 5 9 . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 9 b 9 . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . e 2 2 2 2 2 e . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . . 5 5 5 5 5 . . . . . 
            . . . . . . 9 b 9 b 9 . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 9 b 9 . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            `],
        500,
        true
        )
    }
    if (sprites.readDataNumber(obsidian, "CosmeticPoints") == 2) {
        animation.runImageAnimation(
        obsidian,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . b . 1 1 1 1 1 1 1 1 . . . . 
            . . . b . 1 1 1 1 1 1 . . . . . 
            . . . . b b f f c c . . . . . . 
            . . . . b c c f c c c . . . . . 
            . . . . . c c f c c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . . f . . . . b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . b . 1 1 1 1 1 1 1 1 . . . . 
            . . . b . 1 1 1 1 1 1 . . . . . 
            . . . . b b f f c c . . . . . . 
            . . . . b c c f c c c . . . . . 
            . . . . . c c f c c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . . . . . f . b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . b . 1 1 1 1 1 1 1 1 . . . . 
            . . . b . 1 1 1 1 1 1 . . . . . 
            . . . . b b f f c c . . . . . . 
            . . . . b c c f c c c . . . . . 
            . . . . . c c f c c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . . f . . . . b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . 1 . . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 . . . . . . 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . . . 1 f f 1 1 f f 1 . . . . 
            . . b . 1 1 1 1 1 1 1 1 . . . . 
            . . . b . 1 1 1 1 1 1 . . . . . 
            . . . . b b f f c c . . . . . . 
            . . . . b c c f c c c . . . . . 
            . . . . . c c f c c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . c c c f c c . . . . . 
            . . . . . . . . . f . b . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finale_Ultima_Boss_Phase_1, function (sprite277, otherSprite27) {
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
scene.onOverlapTile(SpriteKind.t3enemy, assets.tile`myTile81`, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.t2enemy, assets.tile`transparency16`, function (sprite9, location6) {
    sprites.destroy(sprite9)
})
scene.onOverlapTile(SpriteKind.t3enemy, assets.tile`myTile22`, function (sprite13, location8) {
    sprites.destroy(sprite13)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.NPC)
    tiles.setCurrentTilemap(tilemap`level1`)
    Maddie = sprites.create(img`
        . . . . . f f 5 5 f f . . . . . 
        . . . . f b 5 b b 5 b f . . . . 
        . . . f 5 b b 9 9 b b 5 f . . . 
        . . f 5 b 9 9 b b 9 9 b 5 f . . 
        . . f b 5 b b 9 9 b b 5 b f . . 
        . f 5 5 b b 5 b b 5 b b 5 5 f . 
        . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
        . f 5 5 d f f d d f f d 5 5 f . 
        . f 5 9 d 1 6 d d 6 1 d 9 5 f . 
        f f 5 5 d d d d d d d d 5 5 f f 
        f 9 1 1 d d d f f d d d 1 1 9 f 
        . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
        . . f 8 8 9 9 9 9 9 9 8 8 f . . 
        . . f f 9 8 8 8 8 8 8 9 f f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . . f 8 8 9 9 8 8 f . . . . 
        `, SpriteKind.NPC_Cosmetic)
    knight = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . . 1 . . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 . . . . . . 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 f f 1 1 f f 1 . . . . 
        . . . . 1 f f 1 1 f f 1 . . . . 
        . . b . 1 1 1 1 1 1 1 1 . . . . 
        . . . b . 1 1 1 1 1 1 . . . . . 
        . . . . b b f f c c . . . . . . 
        . . . . b c c f c c c . . . . . 
        . . . . . c c f c c c . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . c c c f c c . . . . . 
        . . . . . . f . . f . b . . . . 
        `, SpriteKind.cosmetic2)
    lancer = sprites.create(img`
        . . . . . . f f . . . . . 
        . . . . . f 8 8 f . . . . 
        . . . . f 8 8 f 8 f . . . 
        . . . f 8 8 f f 8 8 f . . 
        . . f 8 8 f f f f 8 8 f . 
        . . f 8 1 f f f f 1 8 f . 
        . . f 1 f 1 1 1 1 f 1 f . 
        . f f 1 1 f f f 8 8 1 f . 
        f 8 8 1 1 1 1 1 8 8 f . . 
        f f 1 f f f f f f 1 1 f . 
        . f 1 1 f f 8 f f f 1 f f 
        . . f f f 8 8 8 f f 1 f f 
        . . . . f f f f f f 8 8 . 
        . . . f 1 1 f f 1 1 f . . 
        . . f 8 8 f . . f 8 8 f . 
        `, SpriteKind.cosmetic)
    sparky = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f 2 2 2 2 2 f 5 9 5 9 . . . . 
        . f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
        . f 2 2 2 2 2 f 5 9 5 9 5 b 9 . 
        b f 2 2 2 2 2 f 5 b 5 b 5 9 . . 
        b f 2 2 2 2 2 f 5 9 5 9 . . . . 
        b b b b b b b b b b b b b b . . 
        e e e e e e e e e e b b b . . . 
        e e e e e e e e e e b b b b . . 
        e e e e e e e e e e b b b . . . 
        e e e e e e e e e e b b b b . . 
        . e b e . . . e b e . . . . . . 
        . e e e . . . e e e . . . . . . 
        `, SpriteKind.cosmetic_peak)
    miku = sprites.create(img`
        . . f f f f . . . . f f f f . . 
        . f 9 9 2 f f f f f f 2 9 9 f . 
        f 9 9 2 f 9 9 9 9 9 9 f 2 9 9 f 
        f 9 2 f 9 9 9 9 9 9 9 9 f 2 9 f 
        f 9 9 f 9 9 f f f f 9 9 f 9 9 f 
        f 9 9 f 9 f 6 d d 6 f 9 f 9 9 f 
        f 9 f 9 9 f f d d f f 9 9 f 9 f 
        f 9 9 f 9 f d d d d f 9 f 9 9 f 
        . f 9 9 f f f b b f f f 9 9 f . 
        . f 9 9 f d b 9 9 b d f 9 9 f . 
        f 9 9 f d d b b 9 b d d f 9 9 f 
        . f f d d f b b 9 b f d d f f . 
        . . f f f f c c c c f f f f . . 
        . . . . . f c c c c f . . . . . 
        . . . . . f d d b d f . . . . . 
        . . . . . f c c a c f . . . . . 
        `, SpriteKind.Hatsunemiku)
    tiles.placeOnTile(Maddie, tiles.getTileLocation(26, 28))
    tiles.placeOnTile(knight, tiles.getTileLocation(7, 22))
    tiles.placeOnTile(miku, tiles.getTileLocation(14, 25))
    tiles.placeOnTile(obsidian, tiles.getTileLocation(15, 29))
    tiles.placeOnTile(lancer, tiles.getTileLocation(15, 13))
    tiles.placeOnTile(sparky, tiles.getTileLocation(9, 9))
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile81`, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onCreated(SpriteKind.miniboss, function (sprite7) {
    sprites.setDataNumber(sprite7, "HP", 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.miniboss, function (sprite253, otherSprite4) {
    sprites.changeDataNumberBy(otherSprite4, "HP", -12)
    sprites.destroy(projectile)
    if (sprites.readDataNumber(otherSprite4, "HP") <= 0) {
        sprites.destroy(otherSprite4)
        info.changeScoreBy(200)
        if (info.life() < 50) {
            info.changeLifeBy(25)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite273, otherSprite23) {
    if (isInvincible == false) {
        isInvincible = true
        info.changeLifeBy(-5)
        timer.after(1000, function () {
            isInvincible = false
        })
    }
})
info.onScore(3100, function () {
    info.setLife(500)
    controller.moveSprite(obsidian, 150, 150)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC_Cosmetic, function (sprite, otherSprite) {
    if (info.score() >= 500) {
        obsidian.setImage(img`
            . . . . . f f 5 5 f f . . . . . 
            . . . . f b 5 b b 5 b f . . . . 
            . . . f 5 b b 9 9 b b 5 f . . . 
            . . f 5 b 9 9 b b 9 9 b 5 f . . 
            . . f b 5 b b 9 9 b b 5 b f . . 
            . f 5 5 b b 5 b b 5 b b 5 5 f . 
            . f 5 5 f 5 5 5 5 5 5 f 5 5 f . 
            . f 5 5 d f f d d f f d 5 5 f . 
            . f 5 9 d 1 6 d d 6 1 d 9 5 f . 
            f f 5 5 d d d d d d d d 5 5 f f 
            f 9 1 1 d d d f f d d d 1 1 9 f 
            . f 1 1 8 8 9 9 9 9 8 8 1 1 f . 
            . . f 8 8 9 9 9 9 9 9 8 8 f . . 
            . . f f 9 8 8 8 8 8 8 9 f f . . 
            . . . f f 9 9 9 9 9 9 f f . . . 
            . . . . f 8 8 9 9 8 8 f . . . . 
            `)
        sprites.setDataNumber(obsidian, "CosmeticPoints", 1)
    }
})
sprites.onCreated(SpriteKind.Finale_Ultima_Boss_Phase_2, function (sprite2) {
    sprites.setDataNumber(sprite2, "HP", 2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite16, location11) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnTile(obsidian, tiles.getTileLocation(1, 40))
})
let helioite: Sprite = null
let ruby: Sprite = null
let opal: Sprite = null
let shopkeeper: Sprite = null
let you: Sprite = null
let Maddie: Sprite = null
let sparky: Sprite = null
let knight: Sprite = null
let lancer: Sprite = null
let mySprite3: Sprite = null
let chargeblast: Sprite = null
let miku: Sprite = null
let projectile: Sprite = null
let LostSoul = false
let shards = false
let isInvincible = false
let bleh = false
let tutorial: Sprite = null
let obsidian: Sprite = null
scene.cameraFollowSprite(obsidian)
tiles.setCurrentTilemap(tilemap`level6`)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
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
tutorial = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f 1 f f 1 f . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . f . f f f f f f . f . . . . 
    . f . . f f f f f f . . f . . . 
    . f . . f f f f f f . . f . . . 
    . . f . f f f f f f . f . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `, SpriteKind.NPC)
let mySprite4 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . f f 7 7 7 7 7 7 7 7 7 f . . 
    . . f 7 7 f f f f f f 7 7 f . . 
    . . f f f f 5 5 5 5 f f f f . . 
    . f f 5 f b 2 4 4 2 b f 5 f f . 
    . f 5 5 4 1 2 d d 2 1 4 5 5 f . 
    . . f f f f d d d d d 5 5 f . . 
    . f a a a a f 4 4 4 5 5 f . . . 
    . f a c c a f 2 2 2 2 f 4 e . . 
    . f a c c a f 2 2 2 2 f d 4 . . 
    . . f a a f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.stopper)
scene.cameraFollowSprite(obsidian)
let mySprite = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . e e e 4 4 e e f . . . . 
    . . . f e 4 4 4 4 4 4 e f . . . 
    . . f e 4 e e e e e e 4 e f . . 
    . . f e e 5 4 4 4 4 5 e e f . . 
    . . f e 4 e 5 e e 5 e 4 e f . . 
    . . f f e f f 5 5 f f e f f . . 
    . f f e f 4 4 f f 4 4 f e f f . 
    . f e e f f 2 f f 2 f f e e f . 
    . . f e e f f f f f f e e f . . 
    . . . f e 4 f f f f 4 e f . . . 
    e e e e 4 e 4 e e 4 e 4 e e e e 
    e 2 4 2 f 4 e e e e 4 f 2 4 2 e 
    e 2 4 f 4 f e e e e f 4 f 4 2 e 
    2 2 2 . . 4 f e e f 4 . . 2 2 2 
    . 2 . . . f f . . f f . . . 2 . 
    `, SpriteKind.miniboss)
let meh = sprites.create(img`
    . . 2 . . . 5 5 5 5 . . . 2 . . 
    . . 2 2 2 5 5 4 4 5 5 2 2 2 . . 
    . . . 2 5 4 4 4 4 4 4 5 2 . . . 
    . . f 5 4 5 5 5 5 5 5 4 5 f . . 
    . . f 5 5 c 4 4 4 4 c 5 5 f . . 
    . . f 5 4 5 c 5 5 c 5 4 5 f . . 
    . . f f 5 f f c c f f e f f . . 
    . f f 5 f 5 5 f f 5 5 f 5 f f . 
    . f 5 5 f f c f f c f f 5 5 f . 
    . . f 5 5 f f f f f f 5 5 f . . 
    . . . f 5 4 1 f f 1 4 5 f . . . 
    5 5 5 5 4 e 4 1 1 4 e 4 5 5 5 5 
    5 1 4 1 f 4 5 5 5 5 4 f 1 4 1 5 
    5 1 4 f 4 f 5 5 5 5 f 4 f 4 1 5 
    1 1 1 . . 4 f 5 5 f 4 . . 1 1 1 
    . 1 . . . f f . . f f . . . 1 . 
    `, SpriteKind.miniboss)
let myEnemy = sprites.create(img`
    . . . . . . d d d d . . . . . . 
    . . . . d d d b b d d f . . . . 
    . . . f d b b b b b b d f . . . 
    . . f d b d d d d d d b d f . . 
    . . f d d f b b b b f d d f . . 
    . . f d b d f d d f d b d f . . 
    . . f f d 1 1 f f 1 1 d f f . . 
    . f f d 1 6 6 1 1 6 6 1 d f f . 
    . f d d 1 1 b 1 1 b 1 1 d d f . 
    . . f d d 1 1 1 1 1 1 d d f . . 
    . . . f d b 1 1 1 1 b d f . . . 
    d d d d b d b d d b d b d d d d 
    d 9 b 9 f b d d d d b f 9 b 9 d 
    d 9 b f b f d d d d f b f b 9 d 
    9 9 9 . . b f d d f b . . 9 9 9 
    . 9 . . . f f . . f f . . . 9 . 
    `, SpriteKind.miniboss)
let erm = sprites.create(img`
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . 1 1 1 6 6 1 1 9 . . . . 
    . . . 9 1 6 6 6 6 6 6 1 9 . . . 
    . . 9 1 6 1 1 1 1 1 1 6 1 9 . . 
    . . 9 1 1 9 6 6 6 6 9 1 1 9 . . 
    . . 9 1 6 1 9 1 1 9 1 6 1 9 . . 
    . . 9 9 1 f f 9 9 f f 1 9 9 . . 
    . 9 9 1 f 8 8 f f 8 8 f 1 9 9 . 
    . 9 1 1 f f 1 f f 1 f f 1 1 9 . 
    . . 9 1 1 f f f f f f 1 1 9 . . 
    . . . 9 1 6 f 8 8 f 6 1 9 . . . 
    1 1 1 1 6 1 6 1 1 6 1 6 1 1 1 1 
    1 f 8 9 9 6 1 1 1 1 6 9 9 8 f 1 
    1 f 8 9 6 9 1 1 1 1 9 6 9 8 f 1 
    f f f . . 6 9 1 1 9 6 . . f f f 
    . f . . . 9 9 . . 9 9 . . . f . 
    `, SpriteKind.miniboss)
bleh = false
isInvincible = false
shards = true
sprites.setDataNumber(obsidian, "Bosses Slain", 4)
tiles.placeOnTile(myEnemy, tiles.getTileLocation(1, 129))
tiles.placeOnTile(obsidian, tiles.getTileLocation(127, 127))
tiles.placeOnTile(mySprite, tiles.getTileLocation(127, 4))
tiles.placeOnTile(tutorial, tiles.getTileLocation(130, 128))
tiles.placeOnTile(meh, tiles.getTileLocation(123, 253))
tiles.placeOnTile(erm, tiles.getTileLocation(253, 115))
animation.runImageAnimation(
tutorial,
[img`
    . . . . . f f f f . . . f f . . 
    . . . . f f f f f f . . . . f . 
    . . . . f 1 f f 1 f . . . . f . 
    . . . . f f f f f f . . . f . . 
    . . . . . f f f f . . . . f . . 
    . . . f f f f f f f f . . . . . 
    . . f . f f f f f f . f . f . . 
    . f . . f f f f f f . . f . . . 
    . f . . f f f f f f . . f . . . 
    . . f . f f f f f f . f . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `,img`
    . . . . . f f f f . . . . . f . 
    . . . . f 1 f f 1 f . . f . f . 
    . . . . f 1 f f 1 f . . f . f . 
    . . . . f f f f f f . f . . f . 
    . . . . . f f f f . . f . . . . 
    . . . f f f f f f f f . . . f . 
    . . f . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . . f . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `,img`
    . . . . . f f f f . . . . . . . 
    . . . . f 1 f f 1 f . . . f . . 
    . . . . f 1 f f 1 f . . f . . . 
    . . . . f f f f f f . . f . . . 
    . . . . . f f f f . . f . . . . 
    . . . f f f f f f f f . . . . . 
    . . f . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . . f . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `,img`
    . . . . . f f f f . . . . . . . 
    . . . . f 1 f f 1 f . . f . . . 
    . . . . f 1 f f 1 f . . f . . . 
    . . . . f f f f f f . f . . . . 
    . . . . . f f f f . . f . . . . 
    . . . f f f f f f f f . . . . . 
    . . f . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . f . . f f f f f f . . . . . . 
    . . f . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    . . . f f f . . f f f . . . . . 
    . . f f f f . . f f f f . . . . 
    `],
500,
true
)
controller.moveSprite(obsidian, 85, 85)
LostSoul = true
info.setLife(50)
info.changeScoreBy(3095)
sprites.setDataNumber(obsidian, "CosmeticPoints", 0)
obsidian.z = 1
tiles.placeOnTile(mySprite4, tiles.getTileLocation(133, 124))
game.onUpdateInterval(5000, function () {
    if (spriteutils.isDestroyed(mySprite3) == false) {
        if (randint(1, 4) == 1) {
            mySprite3.setVelocity(20, 20)
        }
        if (randint(1, 4) == 2) {
            mySprite3.setVelocity(-20, -20)
        }
        if (randint(1, 4) == 3) {
            mySprite3.setVelocity(-20, 20)
        }
        if (randint(1, 4) == 4) {
            mySprite3.setVelocity(20, -20)
        }
    }
})
game.onUpdateInterval(15000, function () {
    opal = sprites.create(img`
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
        ......fdd311113ddf......
        ......fbdb3dd3bdbf......
        ......fcdc3113cdcf......
        .......fb311113bf.......
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
    sprites.setDataNumber(opal, "HP", 75)
    tiles.placeOnRandomTile(opal, assets.tile`myTile8`)
    timer.after(20000, function () {
        sprites.destroy(opal)
    })
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
            `, obsidian, -110, 0)
        pause(10000)
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(ruby))) {
        if (spriteutils.distanceBetween(obsidian, ruby) > 125) {
            ruby.follow(null)
        } else {
            ruby.follow(obsidian, 80)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(mySprite))) {
        if (spriteutils.distanceBetween(obsidian, mySprite) > 300) {
            mySprite.follow(null)
        } else {
            mySprite.follow(obsidian, 100)
        }
    }
    pause(100)
    if (!(spriteutils.isDestroyed(mySprite))) {
        if (spriteutils.distanceBetween(obsidian, mySprite) > 300) {
            mySprite.follow(null)
        } else {
            mySprite.follow(obsidian, 90)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(opal))) {
        if (spriteutils.distanceBetween(obsidian, opal) > 125) {
            opal.follow(null)
        } else {
            opal.follow(obsidian, 80)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(myEnemy))) {
        if (spriteutils.distanceBetween(obsidian, myEnemy) > 300) {
            myEnemy.follow(null)
        } else {
            myEnemy.follow(obsidian, 100)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(erm))) {
        if (spriteutils.distanceBetween(obsidian, erm) > 125) {
            erm.follow(null)
        } else {
            erm.follow(obsidian, 100)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(helioite))) {
        if (spriteutils.distanceBetween(obsidian, helioite) > 125) {
            helioite.follow(null)
        } else {
            helioite.follow(obsidian, 80)
        }
    }
})
forever(function () {
    if (!(spriteutils.isDestroyed(meh))) {
        if (spriteutils.distanceBetween(obsidian, meh) > 300) {
            meh.follow(null)
        } else {
            meh.follow(obsidian, 95)
        }
    }
})
game.onUpdateInterval(20000, function () {
    helioite = sprites.create(img`
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
    sprites.setDataNumber(helioite, "HP", 100)
    tiles.placeOnRandomTile(helioite, assets.tile`myTile8`)
    timer.after(20000, function () {
        sprites.destroy(helioite)
    })
})
game.onUpdateInterval(10000, function () {
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
    sprites.setDataNumber(ruby, "HP", 50)
    tiles.placeOnRandomTile(ruby, assets.tile`myTile8`)
    timer.after(20000, function () {
        sprites.destroy(ruby)
    })
})
