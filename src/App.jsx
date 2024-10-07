import './App.css'
import { List } from './components/List'
import { WapperList } from './components/WrapperList'
import Button from './components/Button';

function App() {

  return (
    <>
      
     <WapperList>
      <List/>
     </WapperList>
  
     <Button text="Click me"/>
      
    </>
  )
}

export default App
