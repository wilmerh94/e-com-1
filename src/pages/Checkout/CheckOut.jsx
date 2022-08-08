import { CheckoutProduct } from '../../components/CheckoutProduct/CheckoutProduct'
import './CheckOut.css'
export const CheckOut = () => {
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='checkout_ad'
        />
        <div>
          <h2 className='checkout_title'>Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className='checkout_right'></div>
    </div>
  )
}
