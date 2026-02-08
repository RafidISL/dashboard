import styles from "@/app/components/materiacard.module.css";

export default function Profilo() {
    return (
        <div className={styles.profilo}>
            <h1>Profilo Studente</h1>
            <p><strong>Nome e cognome:</strong> Islam Rafid</p>
            <p><strong>Classe:</strong> 3^CII Informatica</p>
            <p><strong>Istituto:</strong> ITIS Rossi</p>
            <p><strong>Data di nascita:</strong> 05/07/2009</p>
            <p><strong>Luogo di nascita</strong> Arzignano(VI)</p>
            <p><strong>Assenze:</strong> 12</p>
            <p><strong>Email istituzionale</strong> 14529836@itisrossi.vi.it</p>
            <p><strong>Età:</strong> 16</p>
        </div>
    );
}