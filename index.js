const heroName = "Gen"
let heroExp = 9000
let heroLevel


if(heroExp <= 1000) {
    heroLevel = "Ferro"
} else if(heroExp > 1000 && heroExp <= 2000) {
    heroLevel = "Bronze"
} else if(heroExp > 2000 && heroExp <= 5000) {
    heroLevel = "Prata"
} else if(heroExp > 5000 && heroExp <= 6000) {
    heroLevel = "Ouro"
} else if(heroExp > 6000 && heroExp <= 7000) {
    heroLevel = "Platina"
} else if(heroExp > 7000 && heroExp <= 8000) {
    heroLevel = "Diamante"
} else if(heroExp > 8000 && heroExp <= 9000) {
    heroLevel = "Ascendente"
} else if(heroExp > 9000 && heroExp <= 10000) {
    heroLevel = "Imortal"
} else {
    heroLevel = "Radiante"
}


console.log("O héroi de nome " + heroName + " está no nível de " + heroLevel)