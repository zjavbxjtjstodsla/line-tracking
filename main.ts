basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
        TPBot.setWheels(20, 20)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_line_R_unline)) {
        TPBot.setWheels(10, 40)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_unline_R_line)) {
        TPBot.setWheels(40, 10)
    }
})
