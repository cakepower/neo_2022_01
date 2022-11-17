input.onButtonPressed(Button.A, function () {
    strip.setBrightness(100)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.setBrightness(50)
    for (let index = 0; index <= 24; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(100)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
