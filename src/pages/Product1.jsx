import { useParams } from 'react-router-dom'

const Product1 = () => {
    const { id } = useParams();

    return (
        <p>
            ID do produto: {id}
        </p>
    )
}

export default Product1