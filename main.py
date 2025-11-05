def on_up_pressed():
    animation.run_image_animation(diamond,
        [img("""
                . . . . . f f 6 6 f f . . . . .
                . . . . f 8 6 8 8 6 8 f . . . .
                . . . f 9 9 9 9 9 9 9 9 f . . .
                . . f 8 9 9 9 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
                . f 8 9 9 9 9 9 9 9 9 9 9 8 f .
                . f 8 8 9 9 9 9 9 9 9 9 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
                f 9 8 8 8 8 8 8 8 8 8 8 8 8 9 f
                f 9 9 8 8 8 8 8 8 8 8 8 8 9 9 f
                . f 9 9 8 8 8 8 8 8 8 8 9 9 f .
                . . e 4 9 f f f f f f 9 4 e . .
                . . e f 8 6 8 6 8 6 8 8 f e . .
                . . . f f 7 6 7 6 7 6 f f . . .
                . . . . . f f 6 7 f f . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . f f 6 6 f f . . . . .
                . . . . f 8 6 8 8 6 8 f . . . .
                . . . f 9 9 9 9 9 9 9 9 f . . .
                . . f 9 9 9 9 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 8 9 9 9 9 9 9 9 9 9 9 8 f .
                . f 8 8 9 9 9 9 9 9 9 9 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
                f 8 8 8 8 8 8 8 8 8 8 8 8 8 f .
                f 9 9 8 8 8 8 8 8 8 8 8 9 9 f .
                f f 9 9 8 8 8 8 8 8 9 9 9 f . .
                . f 9 9 9 f f f f f f f e 8 . .
                . f 9 f 9 6 8 6 8 8 e 4 4 e . .
                . f 9 f f 7 6 7 6 7 e e f . . .
                . . f . . f 7 6 f f f . . . . .
                """),
            img("""
                . . . . . f f 6 6 f f . . . . .
                . . . . f 8 6 8 8 6 8 f . . . .
                . . . f 9 9 9 9 9 9 9 9 f . . .
                . . f 8 9 9 9 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
                . f 8 9 9 9 9 9 9 9 9 9 9 8 f .
                . f 8 8 9 9 9 9 9 9 9 9 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
                f 9 8 8 8 8 8 8 8 8 8 8 8 8 9 f
                f 9 9 8 8 8 8 8 8 8 8 8 8 9 9 f
                . f 9 9 8 8 8 8 8 8 8 8 9 9 f .
                . . e 4 9 f f f f f f 9 4 e . .
                . . e f 8 6 8 6 8 6 8 8 f e . .
                . . . f f 7 6 7 6 7 6 f f . . .
                . . . . . f f 6 7 f f . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . f f 6 6 f f . . . . .
                . . . . f 8 6 8 8 6 8 f . . . .
                . . . f 9 9 9 9 9 9 9 e f . . .
                . . f 8 9 9 9 9 9 9 9 9 9 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 8 9 9 9 9 9 9 9 9 9 9 8 f .
                . f 8 8 9 9 9 9 9 9 9 9 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 8 f
                . f 9 9 8 8 8 8 8 8 8 8 8 9 9 f
                . . f 9 9 9 8 8 8 8 8 8 9 9 f f
                . . 8 e f f f f f f f 9 9 9 f .
                . . e 4 4 e 8 8 6 8 6 9 f 9 f .
                . . . f e e 7 6 7 6 7 f f 9 f .
                . . . . . f f f 6 7 f . . f . .
                """),
            img("""
                . . . . . f f 6 6 f f . . . . .
                . . . . f 8 6 8 8 6 8 f . . . .
                . . . f 9 9 9 9 9 9 9 9 f . . .
                . . f 8 9 9 9 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 9 9 9 9 9 9 9 9 9 9 f .
                . f 8 9 9 9 9 9 9 9 9 9 9 8 f .
                . f 8 8 9 9 9 9 9 9 9 9 8 8 f .
                . f 8 8 8 8 8 8 8 8 8 8 8 8 f .
                f 9 8 8 8 8 8 8 8 8 8 8 8 8 9 f
                f 9 9 8 8 8 8 8 8 8 8 8 8 9 9 f
                . f 9 9 8 8 8 8 8 8 8 8 9 9 f .
                . . e 4 9 f f f f f f 9 4 e . .
                . . e f 8 6 8 6 8 6 8 8 f e . .
                . . . f f 7 6 7 6 7 6 f f . . .
                . . . . . f f 6 7 f f . . . . .
                """)],
        600,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_b_pressed():
    if cooldown == False:
        controller.move_sprite(helioite, 170, 170)
        
        def on_after():
            global cooldown
            controller.move_sprite(helioite, 100, 100)
            cooldown = True
        timer.after(10000, on_after)
        
        
        def on_after2():
            global cooldown
            cooldown = False
        timer.after(30000, on_after2)
        
    if bleh == False:
        
        def on_after3():
            global projectile, bleh
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                110,
                0)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                -110,
                0)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                110,
                -110)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                110,
                110)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                -110,
                110)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                -110,
                -110)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                0,
                110)
            projectile = sprites.create_projectile_from_sprite(img("""
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
                    """),
                obsidian,
                0,
                -110)
            bleh = True
        timer.after(1, on_after3)
        
        
        def on_after4():
            global bleh
            bleh = False
        timer.after(10000, on_after4)
        
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . f 1 9 9 1 f . . . . . . . . .
            f 1 1 9 1 9 1 f . . . . . . . .
            9 9 9 1 9 9 9 9 f . . . . . . .
            f 1 1 9 1 9 1 f . . . . . . . .
            . f 1 9 9 1 f . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        diamond,
        30,
        0)
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . f 1 5 5 1 f . . . . . . . . .
            f 1 1 5 1 5 1 f . . . . . . . .
            5 5 5 1 5 5 5 5 f . . . . . . .
            f 1 1 5 1 5 1 f . . . . . . . .
            . f 1 5 5 1 f . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        helioite,
        100,
        0)
    projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
        obsidian,
        110,
        0)
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . f 9 1 1 9 f . . . . . . . . .
            f 9 9 1 9 1 9 f . . . . . . . .
            1 1 1 9 1 1 1 1 f . . . . . . .
            f 9 9 1 9 1 9 f . . . . . . . .
            . f 9 1 1 9 f . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        opal,
        120,
        0)
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . f 4 2 2 4 f . . . . . . . . .
            f 4 4 2 4 2 4 f . . . . . . . .
            2 2 2 4 2 2 2 2 f . . . . . . .
            f 4 4 2 4 2 4 f . . . . . . . .
            . f 4 2 2 4 f . . . . . . . . .
            . . f f f f . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """),
        ruby,
        80,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    animation.run_image_animation(diamond,
        [img("""
                . . . f 6 6 f f f f . . . . . .
                . . f 6 8 8 6 8 f 8 f f . . . .
                . . f 8 8 8 8 6 9 9 9 8 f . . .
                . . f 9 6 6 6 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 e e 9 8 9 9 9 9 9 f . .
                . f 9 9 e e e f f 9 9 9 9 f . .
                . f 9 e e e 9 8 f 8 8 8 8 f . .
                . . f e 4 4 9 1 e 8 8 8 8 f . .
                . . . f 4 4 4 4 f 8 8 8 8 f f .
                . . . f e e e f f f 8 8 8 8 f .
                . . . f 6 6 6 e 4 4 f 8 8 f . .
                . . . f 6 6 6 e 4 4 e f f . . .
                . . f 8 6 8 6 8 e e 8 f . . . .
                . . f f 7 6 7 6 7 6 f f . . . .
                . . . . f f 6 7 f f . . . . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . f 6 6 f f f f . . . . . .
                . . f 6 8 8 6 8 f 8 f f . . . .
                . . f 8 8 8 8 6 9 9 9 8 f . . .
                . . f 9 6 6 6 9 9 9 9 9 8 f . .
                . f 9 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 e e 9 8 9 9 9 9 9 f . .
                . f 9 9 e e e f f 9 9 9 9 f . .
                . . f e e e 9 8 f 8 8 8 8 f f .
                . . . e 4 4 9 1 e 8 8 8 8 8 f .
                . . . f 4 4 4 4 f 8 8 8 8 8 f .
                . . . f 6 6 6 e 4 4 8 8 8 f . .
                . . . f 6 6 6 e 4 4 f f f . . .
                . . f 6 6 6 8 8 e e 8 8 f . . .
                . . f 6 7 6 7 6 7 6 7 f . . . .
                . . . f f f 6 7 f f f . . . . .
                """),
            img("""
                . . . f 6 6 f f f f . . . . . .
                . . f 6 8 8 6 8 f 8 f f . . . .
                . . f 8 8 8 8 6 9 9 9 8 f . . .
                . . f 9 6 6 6 9 9 9 9 9 8 f . .
                . . f 9 9 9 9 9 9 9 9 9 9 f . .
                . f 9 9 e e 9 8 9 9 9 9 9 f . .
                . f 9 9 e e e f f 9 9 9 9 f . .
                . f 9 e e e 9 8 f 8 8 8 8 f . .
                . . f e 4 4 9 1 e 8 8 8 8 f . .
                . . . f 4 4 4 4 f 8 8 8 8 f f .
                . . . f e e e f f f 8 8 8 8 f .
                . . . f 6 6 6 e 4 4 f 8 8 f . .
                . . . f 6 6 6 e 4 4 e f f . . .
                . . f 8 6 8 6 8 e e 8 f . . . .
                . . f f 7 6 7 6 7 6 f f . . . .
                . . . . f f 6 7 f f . . . . . .
                """)],
        600,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def characterSelect():
    pass

def on_right_pressed():
    animation.run_image_animation(diamond,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        600,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    animation.run_image_animation(diamond,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        600,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

projectile: Sprite = None
bleh = False
cooldown = False
opal: Sprite = None
helioite: Sprite = None
obsidian: Sprite = None
diamond: Sprite = None
ruby: Sprite = None
scene.camera_follow_sprite(ruby)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
diamond = sprites.create(img("""
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
        """),
    SpriteKind.player)
obsidian = sprites.create(img("""
        . . . . . f f c c f f . . . . .
        . . . . f a c b b c a f . . . .
        . . . f a b b a a b b a f . . .
        . . f c b d c b b c d b c f . .
        . . f b d b b c c b b d b f . .
        . f a a f b c f f c b f a a f .
        . f a a f f f f f f f f a a f .
        . f c c f c a f f a c f c c f .
        . f c c f c a f f a c f c c f .
        f f c c f f f f f f f f c c f f
        f c c f f f f 1 1 f f f f c c f
        . f f f f c b b b b c f f f f .
        . . f a c b b b b b b c a f . .
        . . f f c c c a a c c c f f . .
        . . . f f b f b f b f f f . . .
        . . . . f f b f b f b f . . . .
        """),
    SpriteKind.player)
helioite = sprites.create(img("""
        . . . . . f f 7 7 f f . . . . .
        . . . . f 5 7 5 5 7 5 f . . . .
        . . . f 1 5 7 5 5 7 5 1 f . . .
        . . f 5 1 1 5 7 7 5 1 1 5 f . .
        . . f 1 1 1 1 1 1 1 1 1 1 f . .
        . f 1 1 d 1 1 d d 1 1 d 1 1 f .
        . f 1 1 f f d d d d f f 1 1 f .
        . f 5 5 f 5 5 d d 5 5 f 5 5 f .
        . f 5 5 d d 5 d d 5 d d 5 5 f .
        f f 5 5 1 d d d d d d 1 5 5 f f
        f 5 5 1 5 1 d f f d 1 5 1 5 5 f
        . f d d 1 5 5 1 1 5 5 1 d d f .
        . . d 1 5 1 1 5 5 1 1 5 1 d . .
        . . d f 5 5 5 1 1 5 5 5 f d . .
        . . . f f 5 1 5 5 1 5 f f . . .
        . . . . . f f 5 5 f f . . . . .
        """),
    SpriteKind.player)
ruby = sprites.create(img("""
        . . . . . f f 4 4 f f . . . . .
        . . . . f 2 4 3 3 4 2 f . . . .
        . . . f 2 3 3 4 4 3 3 2 f . . .
        . . f 4 2 2 4 4 4 4 2 2 4 f . .
        . . f 2 2 2 2 2 2 2 2 2 2 f . .
        . f 2 2 5 5 2 4 4 2 5 5 2 2 f .
        . f 2 2 f f 4 4 4 4 f f 2 2 f .
        . f 4 4 f 4 2 4 4 2 4 f 4 4 f .
        . f 4 4 f 3 2 4 4 2 3 f 4 4 f .
        f f 4 4 f 3 3 4 4 3 3 f 4 4 f f
        f 4 4 f f f 5 5 5 5 f f f 4 4 f
        . f 4 4 f 3 2 2 2 2 3 f 4 4 f .
        4 4 4 5 3 2 2 2 2 2 2 3 5 4 4 4
        4 4 4 f 3 3 3 4 4 3 3 3 f 4 4 4
        4 4 . f f 2 4 2 4 2 4 f f . 4 4
        4 4 . . . f f 4 2 f f . . . 4 4
        """),
    SpriteKind.player)
opal = sprites.create(img("""
        . . . . . f f 1 1 f f . . . . .
        . . . . f 9 1 6 6 1 9 f . . . .
        . . . f 9 6 6 1 1 6 6 9 f . . .
        . . f 1 9 9 1 1 1 1 9 9 1 f . .
        . . f 9 9 9 9 9 9 9 9 9 9 f . .
        . f 9 9 d 6 9 d d 9 6 d 9 9 f .
        . f 9 9 f f d d d d f f 9 9 f .
        . f 1 1 f f 1 d d 1 f f 1 1 f .
        . f 1 1 d f 1 d d 1 f d 1 1 f .
        f f 1 1 f d d d d d d f 1 1 f f
        f 1 1 f f f d d d d f f f 1 1 f
        . f d d f 9 1 1 1 1 9 f d d f .
        . . d 1 9 1 1 1 1 1 1 9 1 d . .
        . . d f 9 9 9 1 1 9 9 9 f d . .
        . . . f f 9 9 9 9 9 9 f f . . .
        . . . . . f f 9 9 f f . . . . .
        """),
    SpriteKind.player)
controller.move_sprite(helioite, 100, 100)
controller.move_sprite(diamond, 30, 30)
controller.move_sprite(ruby, 80, 80)
controller.move_sprite(opal, 120, 120)
controller.move_sprite(obsidian, 110, 110)
cooldown = False
bleh = False
info.set_life(100)
