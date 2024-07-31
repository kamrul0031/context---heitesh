import './App.css'
import Log from './components/Log'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>context api </h1>
      <Log/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
