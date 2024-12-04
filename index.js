const heroes = [
["Gon", 5000], 
["Jun", 2500], 
["Mary", 7600], 
["Tyler", 10002], 
["July", 400]
]


for(let i = 0; i < heroes.length; i++) {
    let heroExp = heroes[i][1]
    if(heroExp <= 1000) {
        heroes[i].push("Ferro")
    } else if(heroExp > 1000 && heroExp <= 2000) {
        heroes[i].push("Bronze")
    } else if(heroExp > 2000 && heroExp <= 5000) {
        heroes[i].push("Prata")
    } else if(heroExp > 5000 && heroExp <= 6000) {
        heroes[i].push("Ouro")
    } else if(heroExp > 6000 && heroExp <= 7000) {
        heroes[i].push("Platina")
    } else if(heroExp > 7000 && heroExp <= 8000) {
        heroes[i].push("Diamante")
    } else if(heroExp > 8000 && heroExp <= 9000) {
        heroes[i].push("Ascendente")
    } else if(heroExp > 9000 && heroExp <= 10000) {
        heroes[i].push("Imortal")
    } else {
        heroes[i].push("Radiante")
    }
}


for(let i = 0; i < heroes.length; i++) {
    console.log("O héroi de nome " + heroes[i][0] + " está no nível de " + heroes[i][2])
}
