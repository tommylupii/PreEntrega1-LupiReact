import Cartwidget from "../CartWidget/cartwidget"

const Navbar = () => {
  return (
    <nav>
      <h1 className="title is-1">Tienda de Ropa Digital</h1>
      <div>
        <button className="button is-light">Buzos</button>
        <button className="button is-light">Remeras</button>
        <button className="button is-light">Pantalones</button>
        <button className="button is-light">Zapatillas</button>
      </div>
      <Cartwidget/>
    </nav>
  )
}

export default Navbar