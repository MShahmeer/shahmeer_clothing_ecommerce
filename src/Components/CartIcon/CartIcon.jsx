import {ReactComponent as ShoppingIcon} from '../../Assets/shoppingBag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../Redux/Cart/carActions'
import './CartIconStyles.scss'

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className = 'cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className = 'shopping-icon'/>
      <span className = 'item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: ()=> dispatch(toggleCartHidden()),
})

export default connect(null, mapDispatchToProps)(CartIcon)
