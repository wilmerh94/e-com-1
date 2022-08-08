import './CheckoutProduct.css'
export const CheckoutProduct = ({ products }) => {
  return (
    <div className='checkoutProduct'>
      <img src={products.image} alt='product-img' />

      <div className='product_info'>
        <div className='checkoutProduct_title'>
          <p>{products.title}</p>
        </div>
        <p className='checkoutProduct_price'>
          $<strong>{products.price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
          {[...new Array(rating)].fill().map((_, i) => {
            return <StarIcon key={i} style={{ color: 'rgba(255,25,25)' }} />
          })}
        </div>
      </div>
      <img src={products.image} alt='product-img' />
      <button>Remove</button>
    </div>
  )
}
