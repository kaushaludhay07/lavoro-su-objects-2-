var recinto = [
    {
        specie: "mucca",
        razza: "chianina",
        zampe: 4,
        dieta: {
            ciboPreferito: "erba fresca",
            quantita: "20kg"
        }
    },
    { specie: "cane", razza: "bassotto", zampe: 4 },
    { specie: "gallina", razza: "andalusa", zampe: 2 }
];


for (let i = 0; i < recinto.length; i++) {
    recinto[i].caratteristicheComplete = function() {
        let frase = "Questo animale è un " + this.specie + " " + this.razza + " con " + this.zampe + " zampe.";
       
        if (this.dieta) {
            frase += " Mangia principalmente " + this.dieta.ciboPreferito + ".";
        }
       
        return frase;
    };
}

let contenitore = document.getElementById("lista-animali");

for (let i = 0; i < recinto.length; i++) {
    let p = document.createElement("p");
   
    p.innerHTML = recinto[i].caratteristicheComplete();
   
    contenitore.appendChild(p);
}

console.log("Cibo preferito della mucca: " + recinto[0].dieta.ciboPreferito);