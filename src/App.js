import "./style.css"
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import StyledGlobal, { TelaInteira } from "./styledGlobal"

function App() {
  function reproduzVideo() {
    alert("O video esta sendo reproduzido")
  }
  
 return(
      <>
      <StyledGlobal/>

   <body>
      {/* <div class="tela-inteira"> */}
      <TelaInteira>
        <Header/>
        <main>
        <Nav/>
        <Main reproduz={reproduzVideo}/>
        </main>
        <Footer/>
      </TelaInteira>
      {/* </div> */}
    </body>

  </>
)
}

export default App;
