/**
 * 迫りくる壁の穴を通り抜けるゲーム
 */
// 左に動く
input.onButtonPressed(Button.A, function () {
    me.change(LedSpriteProperty.X, -1)
})
// 最初からスタート
input.onButtonPressed(Button.AB, function () {
    start()
})
// 右に動く
input.onButtonPressed(Button.B, function () {
    me.change(LedSpriteProperty.X, 1)
})
function start () {
    _null = 0
    kabes = [0, 1, 2, 3, 4]
    basic.showString("Avoid it!")
    basic.clearScreen()
    me = game.createSprite(2, 4)
    count = 0
    _null = 1
}
let kabe4: game.LedSprite = null
let kabe3: game.LedSprite = null
let kabe2: game.LedSprite = null
let kabe1: game.LedSprite = null
let 配列 = 0
let ana = 0
let count = 0
let kabes: number[] = []
let _null = 0
let me: game.LedSprite = null
start()
// 壁が迫ってくる
basic.forever(function () {
    if (_null == 1) {
        ana = randint(0, 4)
        配列 = kabes.removeAt(ana)
        for (let index = 0; index <= 5; index++) {
            kabe1 = game.createSprite(kabes[0], index)
            kabe2 = game.createSprite(kabes[1], index)
            kabe3 = game.createSprite(kabes[2], index)
            kabe4 = game.createSprite(kabes[3], index)
            basic.pause(500)
            kabe1.delete()
            kabe2.delete()
            kabe3.delete()
            kabe4.delete()
        }
        kabes.push(配列)
        count += 1
    }
})
// 壁に当たってしまうとゲームオーバーになる。
// 通り抜けた壁の数で点数が決まり、点数によって表示される表情が変化する。
// 
basic.forever(function () {
    if (_null == 1) {
        if (me.isTouching(kabe1) || me.isTouching(kabe2) || (me.isTouching(kabe3) || me.isTouching(kabe4))) {
            game.setScore(count)
            if (count < 10) {
                basic.showIcon(IconNames.Sad)
                basic.pause(1000)
                basic.clearScreen()
            } else if (count > 10) {
                basic.showIcon(IconNames.Happy)
                basic.pause(1000)
                basic.clearScreen()
            } else if (count > 20) {
                basic.showIcon(IconNames.Happy)
                basic.pause(1000)
                basic.clearScreen()
            }
            game.gameOver()
            basic.clearScreen()
        }
    }
})
