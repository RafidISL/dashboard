
export interface Materia{
    id:number;
    nome:string;
    ore:number;
    insegnante:string;
    immagine:string;
    Libro:string;
    Argomenti:string[];

}

export const Materie:Materia []= [
    {id: 1, nome: "Matematica", ore: 4, insegnante: "Francesco Gonzato",immagine:"/images/mate3.avif",Libro:"TUTTI I COLORI DELLA MATEMATICA-ED.VERDE-SECONDO BIENNIO E QUINTO ANNO+EBOOK",Argomenti:["EQUAZIONI,DISEQUAZIONI","FUNZIONI","GONIOMETRIA E TRIGONOMETRIA","FUNZIONE ESPONENZIALE"] },
    { id: 2, nome: "Informatica", ore: 6, insegnante: "Fabrizio Lovison",immagine:"/images/informatica.jpg",Libro:"EPROGRAM(VOL1)",Argomenti:["ALAN TURING E MACCHINA DI TURING","DIAGRAMMI DI FLUSSO","HTML,CSS,JAVASCRIPT,TYPESCRIPT","LINGUAGGIO C#","INTERFACCIA UTENTE","ALGORITMI DI ORDINAMENTO"]} ,
    { id: 3, nome: "Sistemi e reti", ore: 4, insegnante: "Sergio Balestro",immagine:"/images/sitemiereti.jpg",Libro:"GATEWAY TERZA EDIZIONE + EBOOK",Argomenti:["TEORIA DEI SISTEMI","ARCHITETTURA SISTEMI DI ELABORAZIONE","MICROPROCESSORE","ARDUINO","IOT","FONDAMENTI NETWORKING"] },
    { id: 4, nome: "Telecomunicazioni", ore: 3, insegnante: "Tagliapietra Giorgio", immagine:"/images/tele0.webp",Libro:"TELECOMUNICAZIONI - PER INFORMATICA 2ED. VOLUME 1 (LD)",Argomenti:["LEGGE DI OHM","KIRCHHOFF","PARTITORI DI TENSIONE E CORRENTE","THEVENIN","MILLMAN","SOVRAPPOSIZIONE EFFETTI","CORRENTI AD ANELLO","REGIME DI AC","VETTORI ROTANTI E CIRCUITI LINEARI","RETI IN CORRENTE ALTERNATA"] },
    { id: 5, nome: "Inglese", ore: 3, insegnante: "Raffaella Borrelli" ,immagine:"/images/inglese.jpg",Libro:"GOALS - GET INVOLVED!",Argomenti:["PRESENT SIMPLE","PRESENT CONTINOUS","PAST SIMPLE","PRESENT PERFECT","PRESENT PERFECT SIMPLE","FUTURE FORMS","LISTENING AND READING"] },
    { id: 6, nome: "Storia", ore: 2, insegnante: "Perrotta Chiara" ,immagine:"/images/storia.jpg",Libro:"GLI SNODI DELLA STORIA 1",Argomenti:["MEDIOEVO","POTERI IN LOTTA","TRAMONTO DEL MEDIOEVO","VIAGGI DI ESPLORAZIONE E CONQUISTE","GUERRA DI PREDOMINIO IN EUROPA","RIFORMA E CONTRORIFORMA","IL SECOLO DELLE GUERRE DI RELIGIONE"] },
    { id: 7, nome: "Letteratura", ore: 4, insegnante: "Perrotta Chiara",immagine:"/images/letteraura.jpg",Libro:"NOI E LA LETTERATURA ED. ROSSA - VOLUME 1+ ANT. COMMEDIA",Argomenti:["ORIGINI DELLA LETTERATURA","DANTE ALIGHIERI","FRANCESCO PETRARCA","GIOVANNI BOCCACCIO","UMANESIMO E RINASCIMENTO"]  },
    { id: 8, nome: "Scienze motorie", ore: 2, insegnante: "Pasqualetto Filippo",immagine:"/images/motoria.jpg",Libro:"PROFESSIONE SPORT - EDIZIONE ARANCIONE",Argomenti:["POTENZIAMENTO FISIOLOGICO","ATLETICA LEGGERA","GIOCHI SPORTIVI","SPORT INDIVIDUALI","ELEMENTI DI BASE DI TEORIA"] },
    { id: 9, nome: "TPSIT", ore: 3, insegnante: "Antonella Turso", immagine:"/images/tpsit.webp",Libro:"TECNOLOGIE E PROGETT. SIST. INFORMATICI E DI TELECOM. 3ED - VOLUME 1",Argomenti:["CODIFICA DELL'INFORMAZIONE","ALGEBRA DI BOOLE E CIRCUITI LOGICI","SISTEMA OPERATIVO","LINGUAGGIO C"] },
    { id: 10, nome: "Religione", ore: 1, insegnante: "Tonin Carlo",immagine:"/images/religione.webp",Libro:"NUOVO INCONTRO ALL'ALTRO",Argomenti:["GIOVANI IN CAMMINO","IL MONDO DELLA PERSONA E DELLE RELAZIONI","ALLA SCOPERTA DEL DONO DELLA VITA","GIOVANI E SOCIAL","ATTIVITA PER FAVORIRE LA CONOSCENZA"] },
]