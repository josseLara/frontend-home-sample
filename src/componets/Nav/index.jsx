import style from './style.module.css';
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function Nav() {
     return (
          <nav className={style.nav}>
               <h1>Logo</h1>
               <ul>
                    <li>Acerca de</li>
                    <li>Productos</li>
                    <li>Contacto</li>
               </ul>
               <div className={style.nav__btns}>
                    <BsSearch />
                    <AiOutlineShoppingCart />
               </div>
          </nav>
     );
}

export default Nav;