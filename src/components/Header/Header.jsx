import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import StorefrontIcon from '@mui/icons-material/Storefront'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import { useItemValue } from '../../context/ItemProvider'

export const Header = () => {
  const [{ cart }, dispatch] = useItemValue()

  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='header_logo'>
          <StorefrontIcon className='header_logoImage' fontSize='large' />
          <h2 className='header_logoTitle'>E-Commerce</h2>
        </div>
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <div className='nav_item'>
            <span className='nav_itemLine1'>Hello Guest</span>
            <span className='nav_itemLine2'>Sign In</span>
          </div>
        </Link>
        <div className='nav_item'>
          <span className='nav_itemLine1'>Your</span>
          <span className='nav_itemLine2'>Shop</span>
        </div>
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className='nav_itemBasket'>
            <ShoppingBasketIcon fontSize='large' />
            <span className='nav_itemLine2 nav_basketCount'>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
