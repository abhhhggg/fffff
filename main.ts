input.onButtonPressed(Button.A, function () {
    A = randint(1, 10)
})
let A = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
