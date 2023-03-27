basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        cuteBot.moveTime(cuteBot.Direction.forward, 65, 5)
        cuteBot.turnright()
        cuteBot.turnleft()
        cuteBot.forward()
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.stopcar()
    } else {
        cuteBot.backforward()
    }
})
