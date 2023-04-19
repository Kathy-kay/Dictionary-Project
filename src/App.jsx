import Navbar from "./Components/Navbar"
import Input from "./Components/Input"

function App() {
  return (
    <div className="min-h-screen min-w-full dark:bg-black" >
      <div className="w-2/4 m-auto ">
        <Navbar />
        <Input/>
      </div>
    </div>
  )
}

export default App
