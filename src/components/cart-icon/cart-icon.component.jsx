import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//import './cart-icon.styles.scss';

import {
  CartIconWrapper,
  ShoppingIconSvg,
  ItemCount,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconWrapper onClick={toggleCartHidden}>
    <ShoppingIconSvg className="shopping-icon" />
    <ItemCount>{itemCount}</ItemCount>
  </CartIconWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
