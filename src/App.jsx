
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Newboard from './components/Newboard'

function App() {


  return (
    <div className=''>

   

<Routes>

  <Route path='/' Component={Home}/>
  <Route path='/newboard' Component={Newboard}/>
</Routes>
    </div>
  )
}

export default App
