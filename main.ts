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
    for (let index = 0; index <= 25; index++) {
        if (index1 % 3 == 0) {
            strip.setPixelColor(index, neopixel.rgb(0, 255, 0))
        } else if (index1 % 3 == 1) {
            strip.setPixelColor(index, neopixel.rgb(255, 0, 0))
        } else if (index1 % 3 == 2) {
            strip.setPixelColor(index, neopixel.rgb(0, 255, 255))
        }
        strip.show()
        basic.pause(100)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
    index1 += 1
})
let index1 = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
index1 = 0
