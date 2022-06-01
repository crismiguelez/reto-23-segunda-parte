input.onPinPressed(TouchPin.P0, function () {
    if (!(gameover)) {
        for (let index = 0; index <= 2; index++) {
            basic.showNumber(index + 1)
            basic.pause(1000)
        }
    }
    basic.clearScreen()
    basic.pause(randint(3000, 6000))
    game_started = true
    game_stopped = false
    basic.showIcon(IconNames.Heart)
    inicio = input.runningTime()
})
function muestrapuntos () {
    basic.pause(500)
    basic.clearScreen()
    basic.showString("JugA")
    basic.showNumber(puntA)
    basic.pause(1000)
    basic.clearScreen()
    basic.showString("JugB")
    basic.showNumber(puntB)
    basic.pause(1000)
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    muestratiempo()
    muestratiempo()
})
input.onPinPressed(TouchPin.P2, function () {
    if (game_started) {
        game_started = false
        game_stopped = true
        basic.showString("winB")
        puntB += 1
    } else {
        if (!(game_stopped)) {
            basic.showString("winA")
            puntA += 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    puntA = 0
    puntB = 0
    gameover = false
    game_started = false
})
input.onPinPressed(TouchPin.P1, function () {
    if (game_started) {
        game_started = false
        game_stopped = true
        basic.showString("WinA")
        puntA += 1
    } else {
        if (game_stopped) {
            basic.showString("winb")
            puntB += 1
        }
    }
})
function muestratiempo () {
    basic.clearScreen()
    tiempo = input.runningTime() - inicio
    basic.showNumber(Math.idiv(tiempo, 1000))
    basic.showString("s")
    basic.pause(1000)
    basic.clearScreen()
}
let tiempo = 0
let inicio = 0
let game_stopped = false
let gameover = false
let game_started = false
let puntB = 0
let puntA = 0
puntA = 0
puntB = 0
game_started = false
gameover = false
basic.forever(function () {
    if (puntA == 3) {
        basic.showString("Ganador A")
        basic.showString("Game over")
        gameover = true
    }
    if (puntB == 3) {
        basic.showString("Ganador B")
        basic.showString("Game Over")
        gameover = true
    }
})
