import { Header, Panel, Card, Sidebar } from './components'
import MovieProvider from './context/MovieProvider'


function App() {
 // const [movie, setMovie] = React.useState("Saitaan");
  return (
    <>
      <MovieProvider >
        <Header />
        <div className='flex'>
          <Sidebar />
          <Panel />
        </div>
      </MovieProvider>
    </>
  )
}

export default App