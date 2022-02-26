import { ReactComponent as ShoppingIcon } from "../../Assets/shoppingBag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/Cart/carActions";
import { selectCartItemsCount } from "../../Redux/Cart/cartSelectors";
import "./CartIconStyles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
