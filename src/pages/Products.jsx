import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import './Products.css'

const Products = () => {
  const url = 'http://localhost:3000/products';

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Hamburgues</h1>

      {error && <p>{error}</p>}

      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <h5>{item.ingredients}</h5>
            <p>R$: {item.price}</p>

            {/* 4 - Rota Dinamica  */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products