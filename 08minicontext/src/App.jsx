
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Mini context</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
