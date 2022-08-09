import StarIcon from '@mui/icons-material/Star'
import { useItemValue } from '../../context/ItemProvider'

import './Product.css'
export const Product = ({ products }) => {
  const { id, title, image, price, rating } = products
  const [state, dispatch] = useItemValue()
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: { id: id, title: title, image: image, price: price, rating: rating }
    })
  }
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          $<strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {[...new Array(rating)].fill().map((_, i) => {
            return <StarIcon key={i} style={{ color: 'rgba(255,25,25)' }} />
          })}
        </div>
      </div>
      <img src={image} alt='product-img' />
      <button onClick={addToCart}>Add</button>
    </div>
  )
}
