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
controller.moveSprite(obsidian, 110, 110)
