import { Product } from '../../components/Product/Product'
import './Home.css'
export const Home = () => {
  const products = [
    {
      id: '1',
      title: 'Item1',
      price: '23.55',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80'
    },
    {
      id: '2',
      title: 'Item2',
      price: '23.55',
      rating: 2,
      image:
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      id: '3',
      title: 'Item3',
      price: '23.55',
      rating: 5,
      image:
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      id: '4',
      title: 'Item4',
      price: '23.55',
      rating: 1,
      image:
        'https://images.unsplash.com/photo-1598628461950-268968751a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'
    },
    {
      id: '5',
      title: 'Item5',
      price: '23.55',
      rating: 4,
      image:
        'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
    },
    {
      id: '6',
      title: 'Item6',
      price: '23.55',
      rating: 2,
      image:
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
    }
  ]

  return (
    <div>
      <div className='home'>
        <img
          src='https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='home_image'
        />
        <div className='home_row'>
          <Product products={products[0]} key={products[0].id} />
          <Product products={products[1]} key={products[1].id} />
        </div>
        <div className='home_row'>
          <Product products={products[2]} key={products[2].id} />
          <Product products={products[3]} key={products[3].id} />
          <Product products={products[4]} key={products[4].id} />
        </div>
        <div className='home_row'>
          <Product products={products[5]} key={products[5].id} />
        </div>
      </div>
    </div>
  )
}
