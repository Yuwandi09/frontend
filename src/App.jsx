import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import Admin from './pages/admin'
import Test from './pages/test'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <BrowserRouter>
    {/* <Header /> */}
     <div>
      <Toaster />
      <Routes path = "/*">
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/admin/*" element = {<Admin />} />
        <Route path = "/test" element = {<Test />} />
        <Route path = "/*" element = {<h1> 404 error </h1>} />
      </Routes>
     </div> 
    </BrowserRouter>
  )
}

export default App
