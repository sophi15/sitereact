import {ContainerHeader} from './styled';

function Header() {
    return(
        <>
        <ContainerHeader>
            <h1>meu site</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </ContainerHeader>
        </>
     )
} 

export default Header;
