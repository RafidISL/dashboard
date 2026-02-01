import{Materie} from "@/app/models/materie";
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
            <div>
            <h1>Materia:{materiatrovata.nome}</h1>
            <p>Insegnante:{materiatrovata.insegnante}</p>
            <p>ore:{materiatrovata.ore}</p>
          </div>
         );

    }
}