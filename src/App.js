//Ttabalhando com a propriedade children e na criação de um card

import Item from "./components/Item";
import Card from "./components/card"; //Importação do Card

const App = () => {
  return(
    
    <>
      <h1>Aplicação Simples em React</h1>
    <ul>
      <Item>
        Item 1
      </Item>
      <Item>
        Item 2
      </Item>
      <Item>
        Item 3
      </Item>
    </ul>
    <Card/>
    </>
    
  )
}

export default App;

//Neste arquivo é passada a propriedade texto que foi definida no index
