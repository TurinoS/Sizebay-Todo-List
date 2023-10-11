import TextInput from './components/TextInput'
import Filter from './components/Filter'
import HeaderDate from './components/HeaderDate'
import ItemsList from './components/ItemsList'
import ProgressBar from './components/ProgressBar'
import AppContextProvider from './context/AppContext'
import { Container} from './components/Container'
import { AiFillPlusCircle } from 'react-icons/ai'

function App() {
  return (
    <Container>
      <HeaderDate />
      <AppContextProvider>
        <ProgressBar/>
        <Filter />
        <TextInput placeholder='Adicionar item...'><AiFillPlusCircle /></TextInput>
        <ItemsList />
      </AppContextProvider>
    </Container>
  )
}

export default App
