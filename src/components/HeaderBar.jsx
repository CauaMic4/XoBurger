import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <div className='header-bar'>
        <h1>Xo Burger</h1>
        
        <div className='buttons'>
            <button>Pedidos</button>
            <button>Pagamentos</button>
        </div>
    </div>
  )
}

export default HeaderBar;