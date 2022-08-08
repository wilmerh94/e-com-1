import StarIcon from '@mui/icons-material/Star'

import './Product.css'
export const Product = ({ products }) => {
  const { rating } = products
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{products.title}</p>
        <p className='product_price'>
          $<strong>{products.price}</strong>
        </p>
        <div className='product_rating'>
          {[...new Array(rating)].fill().map((_, i) => {
            return <StarIcon key={i} style={{ color: 'rgba(255,25,25)' }} />
          })}
        </div>
      </div>
      <img src={products.image} alt='product-img' />
      <button>Add</button>
    </div>
  )
}
