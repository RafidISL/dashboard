import Link from 'next/link';
import {Materia} from "@/app/models/materie";

export default function  nuovamateriaform() {
    return (
        <form action={} className="mx-auto max-w-7xl lg:max-w-7xl mx-auto">
            <div>
                <label htmlFor="Nuovamateria" className="block text-sm font-medium text-gray-900">Inserisci la nuova materia</label>
                <input type="text" id="Nuovamateria" name="inserisci materia"/>
            </div>

            <div>
                <label htmlFor="ore">Inserire ore materia</label>
                <input type="number" id="ore" name="inserisci materia"/>
            </div>

            <div>
                <label htmlFor="Insegnante">Inserire insegnante</label>
                <input type="text" id="insegnante" name="inserire insegnante"/>
            </div>
        </form>
    );
}