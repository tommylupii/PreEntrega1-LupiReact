import Navbar from "./NavBar/navbar";
import ItemListContainer from "./ItemListContainer/itemlistcontainer";
import "bulma/css/bulma.css"

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos"/>
    </div>
  )
}

export default App