let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("scoreHome")
let scoreGuestEl = document.getElementById("scoreGuest")

function add1Home() {
    scoreHome += 1
    if (scoreHome < 10) {
        scoreHomeEl.textContent = "0" + scoreHome
    } else {
        scoreHomeEl.textContent = scoreHome
    }
}

function add2Home() {
    scoreHome += 2
    if (scoreHome < 10) {
        scoreHomeEl.textContent = "0" + scoreHome
    } else {
        scoreHomeEl.textContent = scoreHome
    }
}

function add3Home() {
    scoreHome += 3
     if (scoreHome < 10) {
        scoreHomeEl.textContent = "0" + scoreHome
    } else {
        scoreHomeEl.textContent = scoreHome
    }
}

function add1Guest() {
    scoreGuest += 1
    if (scoreGuest < 10) {
        scoreGuestEl.textContent = "0" + scoreGuest
    } else {
        scoreGuestEl.textContent = scoreGuest
    }
}

function add2Guest() {
    scoreGuest += 2
    if (scoreGuest < 10) {
        scoreGuestEl.textContent = "0" + scoreGuest
    } else {
        scoreGuestEl.textContent = scoreGuest
    }
}
function add3Guest() {
    scoreGuest += 3
    if (scoreGuest < 10) {
        scoreGuestEl.textContent = "0" + scoreGuest
    } else {
        scoreGuestEl.textContent = scoreGuest
    }
}

function scoreReset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = "00"
    scoreGuestEl.textContent = "00"
}