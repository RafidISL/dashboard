import Link from "next/link";


const materie = [
    { id: 1, nome: "Matematica", ore: 4, insegnante: "Francesco Gonzato" },
    { id: 2, nome: "Informatica", ore: 6, insegnante: "Fabrizio Lovison" },
    { id: 3, nome: "Sistemi e reti", ore: 4, insegnante: "Sergio Balestro" },
    { id: 4, nome: "Telecomunicazioni", ore: 3, insegnante: "Tagliapietra Giorgio" },
    { id: 5, nome: "Inglese", ore: 3, insegnante: "Raffaella Borrelli" },
    { id: 6, nome: "Storia", ore: 2, insegnante: "Perrotta Chiara" },
    { id: 7, nome: "Letteratura", ore: 4, insegnante: "Perrotta Chiara" },
    { id: 8, nome: "Scienze motorie", ore: 2, insegnante: "Pasqualetto Filippo" },
    { id: 9, nome: "TPSIT", ore: 3, insegnante: "Antonella Turso" },
    { id: 10, nome: "Religione", ore: 1, insegnante: "Tonin Carlo" },
];

export default function DettaglioMateria({params}:{params:Promise{id:string}}) {
    const{id}=await params;
    const materia=await
    for(let i=0;i<materie.length;i++){
       if(parseInt(params.id)===materie[i].id){
            materiatrovata=materie[i];
            break;
       }
   }
   return(
       <div>
           <h1>{materiatrovata.nome}</h1>
           <p>ore settimanali:{materiatrovata.ore}</p>
           <p>insegnante:{materiatrovata.insegnante}</p>
       </div>
   );
}

//components Elencoargomneti Materiacard MaterialForm ,material forms