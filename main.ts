input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        motor.turnRight(50)
        basic.pause(1000)
        motor.stop()
        basic.pause(1000)
        servos.setServoPosition(servos.ServoPin.P0, Position.HALF_DOWN)
        basic.pause(1000)
        servos.setServoPosition(servos.ServoPin.P0, Position.UP)
        basic.pause(1000)
        seedsdropped += 1
    }
    motor.stop()
})
servos.motorPinPower(servos.MotorPin.Left, servos.Power.On)
let seedsdropped = 0
basic.forever(function () {
    basic.showNumber(seedsdropped)
})
