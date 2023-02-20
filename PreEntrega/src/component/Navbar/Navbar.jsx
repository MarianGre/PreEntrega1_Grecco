import { BiStoreAlt } from "react-icons/bi";
import { Button } from "@mui/material";
import CartWidget from "../CartWidget/Cartwidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="container">
      <BiStoreAlt className="store-icon" />
      <p>MI TIENDA</p>
      <Button variant="outlined">Inicio</Button>
      <Button variant="outlined">Empresa</Button>
      <Button variant="outlined">Productos</Button>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
