import AddItemInput from './components/AddItemInput'
import Filter from './components/Filter'
import HeaderDate from './components/HeaderDate'
import ItemsList from './components/ItemsList'
import ProgressBar from './components/ProgressBar'
import { Container} from './styles'

function App() {
  return (
    <Container>
      <HeaderDate />
      <ProgressBar progress={30} />
      <Filter />
      <AddItemInput />
      <ItemsList />
    </Container>
  )
}

export default App
