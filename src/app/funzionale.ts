import {reduce} from "eslint-config-next";

const carrello = [
    { prodotto: "Mouse Wireless", prezzo: 25, categoria: "Elettronica" },
    { prodotto: "Tastiera Meccanica", prezzo: 80, categoria: "Elettronica" },
    { prodotto: "Zaino Porta PC", prezzo: 45, categoria: "Accessori" },
    { prodotto: "Tappetino Mouse", prezzo: 15, categoria: "Accessori" },
    { prodotto: "Monitor 24 Pollici", prezzo: 150, categoria: "Elettronica" }
];


//sfida1
const esito0=carrello.map((elemento)=>elemento.prodotto);
console.log(esito0);

//sfida2
const eseito1=carrello.filter((elemento)=>elemento.categoria==="Elettronica"&&elemento.prezzo>50);
console.log(eseito1);

//sfida3
const esito2=carrello.reduce((totale,elemento)=>totale+elemento.prezzo,0);
console.log("il prezzo totale è di "+esito2+"€");

//sfidabonus
const esitobonus=carrello.find(elemento=>elemento.prodotto==="Zaino Porta PC");
console.log(esitobonus);

//sfida superbonus
const esitosbonus=carrello
    .filter((elemento)=>elemento.categoria==="Accessori")
    .reduce((totale,elemento)=>totale+elemento.prezzo,0);

console.log("il totale della categoria accessori è di "+esitosbonus+"€");