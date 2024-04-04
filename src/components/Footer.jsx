import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer_bar'>
            <footer>
                <h2>XoBurguer</h2>

                <nav className='buttons'>
                    <Link to="/" className='button'><button>Home</button></Link>
                    <Link to="/contact_us"><button>Fale conosco</button></Link>
                </nav>

            </footer>
        </div>
    )
}

export default Footer