import './App.css'
import { CreateNewUser } from './components/CreatedNewUser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {

  return (
    <>
      <p className='text-black font-semibold'>DESKTOP</p>
      <ListOfUsers/>
      <CreateNewUser/>
    </>
  )
}

export default App
