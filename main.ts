hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setLED(ThreePort.One, 100)
    basic.pause(200)
    hummingbird.setLED(ThreePort.One, 100)
    basic.pause(200)
})
