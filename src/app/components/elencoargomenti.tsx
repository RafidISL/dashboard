interface ElencoArgomentiProps {
    argomenti: string[];
}

export default function ElencoArgomenti(props: ElencoArgomentiProps) {
    return (
        <div>
            <h2>Argomenti trattati</h2>
            <ul>
                {props.argomenti.map((argomento, pos) => (
                    <li key={pos}>{argomento}</li>
                ))}
            </ul>
        </div>
    );
}