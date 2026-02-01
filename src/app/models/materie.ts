import {images} from "next/dist/build/webpack/config/blocks/images";

export interface Materia{
    id:number;
    nome:string;
    ore:number;
    insegnante:string;
    immagine:string;

}

export const Materie:Materia []= [
    { id: 1, nome: "Matematica", ore: 4, insegnante: "Francesco Gonzato",immagine:"/images/mate3.avif" },
    { id: 2, nome: "Informatica", ore: 6, insegnante: "Fabrizio Lovison",immagine:"/images/informatica.jpg" } ,
    { id: 3, nome: "Sistemi e reti", ore: 4, insegnante: "Sergio Balestro",immagine:"/images/sitemiereti.jpg" },
    { id: 4, nome: "Telecomunicazioni", ore: 3, insegnante: "Tagliapietra Giorgio", immagine:"/images/tele0.webp" },
    { id: 5, nome: "Inglese", ore: 3, insegnante: "Raffaella Borrelli" ,immagine:"/images/inglese.jpg" },
    { id: 6, nome: "Storia", ore: 2, insegnante: "Perrotta Chiara" ,immagine:"/images/storia.jpg" },
    { id: 7, nome: "Letteratura", ore: 4, insegnante: "Perrotta Chiara",immagine:"/images/letteraura.jpg"  },
    { id: 8, nome: "Scienze motorie", ore: 2, insegnante: "Pasqualetto Filippo",immagine:"/images/motoria.jpg" },
    { id: 9, nome: "TPSIT", ore: 3, insegnante: "Antonella Turso", immagine:"/images/tpsit.webp" },
    { id: 10, nome: "Religione", ore: 1, insegnante: "Tonin Carlo",immagine:"/images/religione.webp" },
]