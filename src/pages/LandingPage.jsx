import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className='banner'>
                <h2>A melhor casa do hamburger! <span>Qual a sua escolha?</span></h2>
                <div className='options'>
                    <Link to='/menu'><p>Menu</p></Link>
                    <p>Monte o seu!</p>
                </div>
            </div>

            <div className='contact-us container'>
                <Link to='/contact_us'><button>Fale conosco</button></Link>
            </div>

            <div className='our-story'>
                <h2>Nossa História</h2>
                <p>Desde de 2010 no mercado. Esta empresa veio da paixao por hamburguers, revolucionando todo o mercado, disputando com grandes marcas. Nossos sabores sao unicos e a sensação de comer nossos hamburgers sao unicas. Venha experimentar</p>
            </div>
        </>
    )
}

export default LandingPage;