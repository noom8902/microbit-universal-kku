let sensorvalue = 0
let Left_on_black = 0
let Right_on_black = 0
function TINYTURNRIGHT (LEFT: number, RIGHT: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinRight, LEFT, RIGHT)
}
function TINYTURNLEFT (LEFT: number, RIGHT: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_SpinLeft, LEFT, RIGHT)
}
function TINYBACKWARD (LEFT: number, RIGHT: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Back, LEFT, RIGHT)
}
function Roversensor_read () {
    sensorvalue = Rover.LineTracking()
    if (Rover.LineTracking() == 4 || Rover.LineTracking() == 6) {
        Left_on_black = 1
        Right_on_black = 0
    } else if (Rover.LineTracking() == 1 || Rover.LineTracking() == 3) {
        Left_on_black = 0
        Right_on_black = 1
    } else if (Rover.LineTracking() == 7) {
        Left_on_black = 1
        Right_on_black = 1
    } else {
        Left_on_black = 0
        Right_on_black = 0
    }
}
function TINYFORWARD (LEFT: number, RIGHT: number) {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, LEFT, RIGHT)
}
function ROVERTURNLEFT (LEFT: number, RIGHT: number) {
    Rover.MotorRunDual(-1 * LEFT, 1 * RIGHT)
}
function Tinysensor_read () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Left_on_black = 0
        Right_on_black = 0
        Tinybit.RGB_Car_Program().setPixelColor(1, neopixel.rgb(0, 0, 0))
        Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.rgb(0, 0, 0))
        Tinybit.RGB_Car_Program().show()
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Left_on_black = 1
        Right_on_black = 0
        Tinybit.RGB_Car_Program().setPixelColor(1, neopixel.rgb(50, 50, 50))
        Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.rgb(0, 0, 0))
        Tinybit.RGB_Car_Program().show()
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Left_on_black = 0
        Right_on_black = 1
        Tinybit.RGB_Car_Program().setPixelColor(1, neopixel.rgb(0, 0, 0))
        Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.rgb(50, 50, 50))
        Tinybit.RGB_Car_Program().show()
    } else {
        Left_on_black = 1
        Right_on_black = 1
        Tinybit.RGB_Car_Program().setPixelColor(1, neopixel.rgb(50, 50, 50))
        Tinybit.RGB_Car_Program().setPixelColor(0, neopixel.rgb(50, 50, 50))
        Tinybit.RGB_Car_Program().show()
    }
}
function ROVER_LINE_TRACKING () {
    if (Left_on_black == 0 && Right_on_black == 0) {
        ROVERFORWARD(100, 100)
    } else if (Left_on_black == 1 && Right_on_black == 0) {
        ROVERTURNLEFT(150, 150)
    } else if (Left_on_black == 0 && Right_on_black == 1) {
        ROVERTURNRIGHT(150, 150)
    } else {
        ROVERFORWARD(0, 0)
    }
}
function ROVERTURNRIGHT (LEFT: number, RIGHT: number) {
    Rover.MotorRunDual(1 * LEFT, -1 * RIGHT)
}
function TINY_LINE_TRACKING () {
    if (Left_on_black == 0 && Right_on_black == 0) {
        TINYFORWARD(70, 70)
    } else if (Left_on_black == 1 && Right_on_black == 0) {
        TINYTURNLEFT(50, 50)
    } else if (Left_on_black == 0 && Right_on_black == 1) {
        TINYTURNRIGHT(50, 50)
    } else {
        TINYFORWARD(0, 0)
    }
}
function ROVERFORWARD (LEFT: number, RIGHT: number) {
    Rover.MotorRunDual(LEFT, RIGHT)
}
function ROVERBACKWARD (LEFT: number, RIGHT: number) {
    Rover.MotorRunDual(-1 * LEFT, -1 * RIGHT)
}
basic.forever(function () {
	
})
