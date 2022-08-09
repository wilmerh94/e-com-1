import CurrencyFormat from 'react-currency-format'
import { useItemValue } from '../../context/ItemProvider'
import { getCartTotal } from '../../context/Reducer'

import './Subtotal.css'
export const Subtotal = () => {
  const [{ cart }, dispatch] = useItemValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong> ${value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}
