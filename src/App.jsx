import './App.css'
import { List } from './components/List'
import { WapperList } from './components/WrapperList'
import Button from './components/Button';
import CompWithProps from './components/CompWithProps';

function App() {

  return (
    <>
      
     <WapperList>
      <List/>
     </WapperList>
     <CompWithProps />
      
    </>
  )
}

export default App
