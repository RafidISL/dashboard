import{Materie} from "@/app/models/materie";
import ElencoArgomenti from "@/app/components/elencoargomenti";
import styles from "@/app/components/materiacard.module.css";

interface DettagliomateriaProps{
    params:Promise<{id:string}>
}

export default async function DettglioMateria(props: DettagliomateriaProps){
    let materiatrovata=null
    const{id}=await props.params;
    const idnum=parseInt(id);
    for(let i=0;i<Materie.length;i++){
        console.log(typeof id,typeof Materie[i].id )
        if(idnum===Materie[i].id){
          materiatrovata=Materie[i];
          break;
        }
    }
    if(materiatrovata===null){
        return(<h1>Materia non trovata!</h1>)
    } else{
        return(
            <div className={styles.dettaglio}>
                  <div className={styles.container}>
                  <h1>
                        <span className={styles.titolo}>Materia:</span>
                        <span className={styles.testo}> {materiatrovata.nome}</span>
                  </h1>
                  <p>
                      <span className={styles.titolo}>Insegnante:</span>
                     <span className={styles.testo}> {materiatrovata.insegnante}</span>
                 </p>
                  <p>
                      <span className={styles.titolo}>Ore:</span>
                      <span className={styles.testo}> {materiatrovata.ore}</span>
                   </p>
                    <div>
                       <ElencoArgomenti argomenti={materiatrovata.Argomenti} />
                    </div>
                </div>
            </div>

        );

    }
}