import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { PokemonContextProvider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login'
import { Home } from './components/Home'

function App() {
  return (
    <div className="App">



      <PokemonContextProvider>

        <Navigation />

        <Router>

          <Routes>

            <Route path='/' element={<Login />} />

            <Route path='/home' element={<Home />} />

          </Routes>

        </Router>

      </PokemonContextProvider>

    </div>
  );
}

export default App;
