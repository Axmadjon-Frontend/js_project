const kun = document.querySelector(".kun"),
soat = document.querySelector(".soat"),
minut = document.querySelector(".minut"),
sekund = document.querySelector(".sekund")


setInterval(() => {
    const bugun = new Date()
    const tugashsana = new Date("08 aprel 2023")
    const farq = tugashsana - bugun

    let farqKun = Math.floor(farq / 1000 / 60 / 60  / 24)
    let farqSoat = Math.floor(farq / 1000 / 60 / 60 % 24)
    let farqMinut = Math.floor(farq / 1000 / 60 % 60)
    let farqSekund = Math.floor(farq / 1000 % 60)

    kun.innerHTML = `<nobr>kun: ${farqKun}</nobr>`
    soat.innerHTML = `<nobr>soat: ${farqSoat}</nobr>`
    minut.innerHTML = `<nobr>minut: ${farqMinut}</nobr>`
    sekund.innerHTML = `<nobr>sekund: ${farqSekund}</nobr>`

    



}, 1000)

function nol (x) {
    if(x < 10) {
        return`0${x}`
    } else {
        return x
    }
}

