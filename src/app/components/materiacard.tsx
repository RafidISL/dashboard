import Link from "next/link";
import{Materia} from "../models/materie";
import styles from "./materiacard.module.css"
import Image from "next/image";


interface MostraMateriaProps {
    materia: Materia;
}

export default function MostraMateria(props: MostraMateriaProps) {
    const materia=props.materia;
    return(
        <div className={styles.card}>
            <h1>{materia.nome}</h1>
            <Image
                src={materia.immagine!}
                width={300}
                height={300}
                alt={materia.nome}
            />
            <Link href={`/materie/${materia.id}`}>VEDI DETTAGLI</Link>
        </div>
    );
}