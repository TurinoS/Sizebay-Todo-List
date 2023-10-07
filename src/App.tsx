import Filter from './components/Filter'
import HeaderDate from './components/HeaderDate'
import ProgressBar from './components/ProgressBar'
import { Container} from './styles'

function App() {
  return (
    <Container>
      <HeaderDate />
      <ProgressBar progress={30} />
      <Filter />
    </Container>
  )
}

export default App
