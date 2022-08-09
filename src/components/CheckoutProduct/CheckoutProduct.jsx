import StarIcon from '@mui/icons-material/Star'
import { useItemValue } from '../../context/ItemProvider'

import './CheckoutProduct.css'
export const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useItemValue()
  const handleRemove = () => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} alt='product-img' className='checkoutProduct_image' />

      <div className='checkoutProduct_info'>
        <div className='checkoutProduct_title'>
          <p>{title}</p>
        </div>
        <p className='checkoutProduct_price'>
          $<strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {[...new Array(rating)].fill().map((_, i) => {
            return <StarIcon key={i} style={{ color: 'rgba(255,25,25)' }} />
          })}
        </div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  )
}
