// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100005030303030303030303030303030305040101010101010101010101010101060401010105010101010101010501010604010101010101010101010101010106040101010105010101010101010101060401010101010101010501050101010604010101050101010101010101010106040101010101010101010101010101060401010101010501010101050105010604010101010101010101010101010106040105010501010101050101010101060401010101010101010101010101010604010101010101010101050101010106040101010101010101010101010101060401010101010101010101010101010605020202020202020202020202020205`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . 2 . 2 . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . 2 . 2 . . 
. . . . . . . . . . . . . . . . 
. . 2 . 2 . . . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.builtin.forestTiles0,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
