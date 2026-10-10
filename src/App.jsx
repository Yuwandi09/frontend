import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'
import Admin from './pages/admin'


function App() {


  return (
    <BrowserRouter>
     <Header />
     <div>
      <Routes path = "/*">
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/admin/*" element = {<Admin />} />
        <Route path = "/*" element = {<h1> 404 error </h1>} />
      </Routes>
     </div> 
    </BrowserRouter>
  )
}

export default App
