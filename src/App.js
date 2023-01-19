import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navigation} from './components/Navigation'
import {PokemonContextProvider} from './context'



function App() {
  return (
    <div className="App">



      <PokemonContextProvider>

      

        <Router>


          <Navigation/>

          <Routes>


          </Routes>

        </Router>

      </PokemonContextProvider>

    </div>
  );
}

export default App;
