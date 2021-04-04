let Timer = 0
input.onButtonPressed(Button.A, function () {
    Timer = randint(5, 15)
    basic.showIcon(IconNames.Chessboard)
    while (Timer > 0) {
        Timer += -1
        basic.pause(1000 )
    }
    basic.showIcon(IconNames.Skull)
})
