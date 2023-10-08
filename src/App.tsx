import AddItemInput from './components/AddItemInput'
import Filter from './components/Filter'
import HeaderDate from './components/HeaderDate'
import ItemsList from './components/ItemsList'
import ProgressBar from './components/ProgressBar'
import AppContextProvider from './context/AppContext'
import { Container} from './styles'

function App() {
  return (
    <Container>
      <HeaderDate />
      <AppContextProvider>
        <ProgressBar progress={30} />
        <Filter />
        <AddItemInput />
        <ItemsList />
      </AppContextProvider>
    </Container>
  )
}

export default App
