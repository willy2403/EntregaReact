import style from "./navbar.module.css";
import CartWidget from "./CartWidget"

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
            <a href="#"> <CartWidget/> <span>3</span> </a>
          </li> 
        </ul>
      
    </nav>
  );
};

export default Navbar