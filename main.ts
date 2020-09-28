let heat = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        heat += 1 + heat
        basic.showNumber(heat)
    }
    if (input.buttonIsPressed(Button.B)) {
        heat += -1
        basic.showString("" + (heat))
    }
})
