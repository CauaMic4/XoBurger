import { Link } from 'react-router-dom';
import './HeaderBar.css';

const HeaderBar = () => {

  return (
    <div className='header-bar'>
      <h1>Xo Burger</h1>
    
      <nav className='buttons'>
        <Link to="/products" className='button'><button>Pedidos</button></Link>
        <Link to="/payment"><button>Pagamentos</button></Link>
      </nav>
    </div>
  )
}

export default HeaderBar;