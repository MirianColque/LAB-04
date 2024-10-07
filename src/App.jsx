import './App.css'
import { List } from './components/List'
import { WapperList } from './components/WrapperList'
import Button from './components/Button';
import RandomComponent from './components/RandomComponent';


function App() {

  return (
    <>
      
     <WapperList>
      <List/>
     </WapperList>
     <Button text="Click me" />
     <RandomComponent /> {/* Llama al nuevo componente aquí */}
     

      
    </>
  )
}

export default App
