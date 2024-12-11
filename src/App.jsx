import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
