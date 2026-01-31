import {images} from "next/dist/build/webpack/config/blocks/images";

export interface Materia{
    id:number;
    nome:string;
    ore:number;
    insegnante:string;
    immagine:string;

}

export const Materie:Materia []= [
    { id: 1, nome: "Matematica", ore: 4, insegnante: "Francesco Gonzato",immagine:"/images/matematica.jpg" },
    { id: 2, nome: "Informatica", ore: 6, insegnante: "Fabrizio Lovison",immagine:"/images/informatica.jpg" } ,
    { id: 3, nome: "Sistemi e reti", ore: 4, insegnante: "Sergio Balestro",immagine:"/images/sistemi_e_reti.jpeg" },
    { id: 4, nome: "Telecomunicazioni", ore: 3, insegnante: "Tagliapietra Giorgio", immagine:"/images/storia.jpg" },
    { id: 5, nome: "Inglese", ore: 3, insegnante: "Raffaella Borrelli" ,immagine:"/images/storia.jpg" },
    { id: 6, nome: "Storia", ore: 2, insegnante: "Perrotta Chiara" ,immagine:"/images/storia.jpg" },
    { id: 7, nome: "Letteratura", ore: 4, insegnante: "Perrotta Chiara",immagine:"/images/storia.jpg"  },
    { id: 8, nome: "Scienze motorie", ore: 2, insegnante: "Pasqualetto Filippo",immagine:"/images/storia.jpg" },
    { id: 9, nome: "TPSIT", ore: 3, insegnante: "Antonella Turso", immagine:"/images/storia.jpg" },
    { id: 10, nome: "Religione", ore: 1, insegnante: "Tonin Carlo",immagine:"/images/storia.jpg" },
]