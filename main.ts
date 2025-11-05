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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bleh == false) {
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
        })
        timer.after(10000, function () {
            bleh = false
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
function characterSelect () {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . . . . f f f f 6 6 f . . . 
        . . . . f f 8 f 6 6 8 8 6 f . . 
        . . . f 8 9 9 9 9 8 8 8 8 f . . 
        . . f 8 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 9 9 9 6 9 e e 9 9 f . 
        . . f 9 9 9 9 f f e e e 9 9 f . 
        . . f 8 8 8 8 f 8 9 e e e 9 f . 
        . . f 8 8 8 8 e 1 9 4 4 e f . . 
        . f f 8 8 8 8 f 4 4 4 4 f . . . 
        . f 8 8 8 8 f f f e e e f . . . 
        . . f 8 8 f 4 4 e 6 6 6 f . . . 
        . . . f f e 4 4 e 6 6 6 f . . . 
        . . . . f 8 e e 8 6 8 6 8 f . . 
        . . . . f f 6 7 6 7 6 7 f f . . 
        . . . . . . f f 7 6 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f 6 6 f . . . 
        . . . . f f 8 f 8 6 8 8 6 f . . 
        . . . f 8 9 9 9 6 8 8 8 8 f . . 
        . . f 8 9 9 9 9 9 6 6 6 9 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 9 f . 
        . . f 9 9 9 9 9 6 9 e e 9 9 f . 
        . . f 9 9 9 9 f f e e e 9 9 f . 
        . f f 8 8 8 8 f 8 9 e e e f . . 
        . f 8 8 8 8 8 e 1 9 4 4 e . . . 
        . f 8 8 8 8 8 f 4 4 4 4 f . . . 
        . . f 8 8 8 4 4 e 6 6 6 f . . . 
        . . . f f f 4 4 e 6 6 6 f . . . 
        . . . f 8 8 e e 8 8 6 6 6 f . . 
        . . . . f 8 7 6 7 6 7 6 8 f . . 
        . . . . . f f f 6 7 f f f . . . 
        `,img`
        . . . . . . f f f f 6 6 f . . . 
        . . . . f f 8 f 6 6 8 8 6 f . . 
        . . . f 8 9 9 9 9 8 8 8 8 f . . 
        . . f 8 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 9 9 9 6 9 e e 9 9 f . 
        . . f 9 9 9 9 f f e e e 9 9 f . 
        . . f 8 8 8 8 f 8 9 e e e 9 f . 
        . . f 8 8 8 8 e 1 9 4 4 e f . . 
        . f f 8 8 8 8 f 4 4 4 4 f . . . 
        . f 8 8 8 8 f f f e e e f . . . 
        . . f 8 8 f 4 4 e 6 6 6 f . . . 
        . . . f f e 4 4 e 6 6 6 f . . . 
        . . . . f 8 e e 8 6 8 6 8 f . . 
        . . . . f f 6 7 6 7 6 7 f f . . 
        . . . . . . f f 7 6 f f . . . . 
        `],
    600,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    obsidian,
    [img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 9 8 6 6 8 9 f . . . . 
        . . . f 9 6 6 8 8 6 6 9 f . . . 
        . . f 8 9 9 8 8 8 8 9 9 8 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
        . f 9 9 f f e e e e f f 9 9 f . 
        . f 8 8 f 8 9 e e 9 8 f 8 8 f . 
        . f 8 8 e 1 9 4 4 9 1 e 8 8 f . 
        f f 8 8 f 4 4 4 4 4 4 f 8 8 f f 
        f 8 8 f f f e e e e f f f 8 8 f 
        . f e e f 8 6 6 6 6 8 f e e f . 
        . . e 4 8 6 6 6 6 6 6 8 4 e . . 
        . . e f 8 8 8 9 9 8 8 8 f e . . 
        . . . f f 6 7 6 7 6 7 f f . . . 
        . . . . . f f 7 6 f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 9 8 6 6 8 9 f . . . . 
        . . . f 9 6 6 8 8 6 6 9 f . . . 
        . . f 8 9 9 8 8 8 8 9 9 8 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
        . f 8 9 f f e e e e f f 9 8 f . 
        f f 8 8 f 8 9 e e 9 8 f 8 8 f f 
        f 8 8 8 e 1 9 4 4 9 1 e 8 8 8 f 
        . f 8 8 e e 4 4 4 4 4 f 8 8 f . 
        . . f 4 4 4 e 6 6 6 8 f e f . . 
        . . f e 4 4 e 6 6 6 6 8 4 e . . 
        . . . f e e 6 6 8 6 8 8 f e . . 
        . . . f f 7 6 7 6 7 6 f f . . . 
        . . . . . f f f 7 6 f . . . . . 
        `,img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 9 8 6 6 8 9 f . . . . 
        . . . f 9 6 6 8 8 6 6 9 f . . . 
        . . f 8 9 9 8 8 8 8 9 9 8 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
        . f 9 9 f f e e e e f f 9 9 f . 
        . f 8 8 f 8 9 e e 9 8 f 8 8 f . 
        . f 8 8 e 1 9 4 4 9 1 e 8 8 f . 
        f f 8 8 f 4 4 4 4 4 4 f 8 8 f f 
        f 8 8 f f f e e e e f f f 8 8 f 
        . f e e f 8 6 6 6 6 8 f e e f . 
        . . e 4 8 6 6 6 6 6 6 8 4 e . . 
        . . e f 8 8 8 9 9 8 8 8 f e . . 
        . . . f f 6 7 6 7 6 7 f f . . . 
        . . . . . f f 7 6 f f . . . . . 
        `,img`
        . . . . . . . f f . . . . . . . 
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 9 8 6 6 8 9 f . . . . 
        . . . f 9 6 6 8 8 6 6 9 f . . . 
        . . f 8 9 9 8 8 8 8 9 9 8 f . . 
        . f 9 9 9 9 9 9 9 9 9 9 9 9 f . 
        . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
        . f 8 9 f f e e e e f f 9 8 f . 
        f f 8 8 f 8 9 e e 9 8 f 8 8 f f 
        f 8 8 8 e 1 9 4 4 9 1 e 8 8 8 f 
        . f 8 8 f 4 4 4 4 4 e e 8 8 f . 
        . . f e f 8 6 6 6 e 4 4 4 f . . 
        . . e 4 8 6 6 6 6 e 4 4 e f . . 
        . . e f 8 8 6 8 6 6 e e f . . . 
        . . . f f 6 7 6 7 6 7 f f . . . 
        . . . . . f 6 7 f f f . . . . . 
        `,img`
        . . . . . f f 8 8 f f . . . . . 
        . . . . f 9 8 6 6 8 9 f . . . . 
        . . . f 9 6 6 8 8 6 6 9 f . . . 
        . . f 8 9 9 8 8 8 8 9 9 8 f . . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . f 9 9 e 6 9 e e 9 6 e 9 9 f . 
        . f 9 9 f f e e e e f f 9 9 f . 
        . f 8 8 f 8 9 e e 9 8 f 8 8 f . 
        . f 8 8 e 1 9 4 4 9 1 e 8 8 f . 
        f f 8 8 f 4 4 4 4 4 4 f 8 8 f f 
        f 8 8 f f f e e e e f f f 8 8 f 
        . f e e f 8 6 6 6 6 8 f e e f . 
        . . e 4 8 6 6 6 6 6 6 8 4 e . . 
        . . e f 8 8 8 9 9 8 8 8 f e . . 
        . . . f f 6 7 6 7 6 7 f f . . . 
        . . . . . f f 7 6 f f . . . . . 
        `],
    600,
    true
    )
})
let projectile: Sprite = null
let bleh = false
let obsidian: Sprite = null
scene.cameraFollowSprite(obsidian)
tiles.setCurrentTilemap(tilemap`level1`)
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
info.setLife(50)
