
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Newboard from './components/Newboard'
import Addnewtask from './pages/AddNewTask'

function App() {


  return (
    <div className=''>



<Routes>

  <Route path='/' Component={Home}/>
  <Route path='/newboard' Component={Newboard}/>
  <Route path='/newboard/:currentBoard' Component={Newboard}/>
  <Route path='/:boardname/addnewtask' Component={Addnewtask}/>
  <Route path='/:boardname/addnewtask/:task' Component={Addnewtask}/>
  
</Routes>
    </div>
  )
}

export default App
