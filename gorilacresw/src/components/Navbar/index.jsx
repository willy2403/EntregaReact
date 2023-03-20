import style from "./navbar.module.css";
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navconteiner}>
         <span className={style.title}>Gorilacrew</span>
        <ul className={style.navcont}>
          <li>
            <a href="#">Remeras</a>
          </li>
          <li>
            <a href="#">Pantalones</a>
          </li>
          <li>
            <Link to={"/cart"}> <CartWidget/> <span>3</span> </Link>
          </li> 
        </ul>
      
    </nav>
  );
};

export default Navbar