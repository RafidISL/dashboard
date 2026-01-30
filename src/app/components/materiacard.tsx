import Link from 'next/link';
import {Materia} from "@/app/models/materie";

interface materiacardProps{
    materia:Materia;
}

export default function materiacard(){
    return (
        <div className="container">
                <h1>{materiatrovata.nome}</h1>
                <p>ore settimanali:{materiatrovata.ore}</p>
                <p>insegnante:{materiatrovata.insegnante}</p>
        </div>
    );
}