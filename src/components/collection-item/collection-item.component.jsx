import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

//import "./collection-item.styles.scss";

import {
  CollectionItemContainer,
  CollectionItemImage,
  ButtonAdd,
  CollectionFooterContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooterContainer>
      <ButtonAdd onClick={() => addItem(item)} inverted>
        Add to cart
      </ButtonAdd>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
