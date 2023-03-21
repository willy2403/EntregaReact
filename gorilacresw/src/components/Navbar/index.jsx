import style from "./navbar.module.css";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={style.navconteiner}>
         <span className={style.title}>Gorilacrew</span>
        <ul className={style.navcont}>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
          <Link to={"/product"}>Remeras</Link>
          </li>
          <li>
          <Link to={"/product"}>Remeras</Link>
          </li>
          <li>
            <Link to={"/cart"}> <CartWidget/> <span>3</span> </Link>
          </li> 
        </ul>
      
    </nav>
  );
};

export default Navbar