import './card.jsx'
import { ContainerCard, ContainerImagem } from './card.jsx'
   
   function Card(props){

        return(
            <>
            <ContainerCard onClick={props.reproduz}>
                    <ContainerImagem src={props.link} alt=""></ContainerImagem>
                    <h4>{props.titulo}</h4>
            </ContainerCard>    
            

            </>
        )

    }

    export default Card