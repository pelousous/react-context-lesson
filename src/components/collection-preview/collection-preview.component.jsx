import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

//import "./collection-preview.styles.scss";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionPreviewList,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewList>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewList>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
