import { Route, Routes } from 'react-router-dom'
import { Email, Home, Login, SignUp } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup'  element={<SignUp />} />
      <Route path='/login'  element={<Login />} />
      <Route path='/email'  element={<Email />} />
    </Routes>
  )
}

export default App
