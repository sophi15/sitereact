import Card from "../Card/Card";
import './main.css'
import { PaineldeVideo } from "./main.jsx"

function Main(props){
    return(
        <>
        <PaineldeVideo>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=11'}
            titulo= {'Título do video 1'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=1'}
            titulo= {'Título do video 2'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=2'}
            titulo= {'Título do video 3'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=3'}
            titulo= {'Título do video 4'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=4'}
            titulo= {'Título do video 5'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=5'}
            titulo= {'Título do video 6'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=6'}
            titulo= {'Título do video 7'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=8'}
            titulo= {'Título do video 8'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=9'}
            titulo= {'Título do video 9'}/>
            <Card reproduz= {props.reproduz}
            link= {'https://picsum.photos/400/400?a=10'}
            titulo= {'Título do video 10'}/>

        </PaineldeVideo>
        </>       
    )
}
export default Main;

        