import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoffeTasting from './pages/CoffeeTasting';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<CoffeTasting/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
