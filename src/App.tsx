import './App.css'
import { CreateNewUser } from './components/CreatedNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { Toaster } from "sonner";

function App() {

  return (
    <>
      <p className='text-black font-semibold'>DESKTOP</p>
      <ListOfUsers/>
      <CreateNewUser/>
      <Toaster richColors/>
    </>
  )
}

export default App
