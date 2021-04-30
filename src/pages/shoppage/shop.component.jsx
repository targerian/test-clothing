import React from "react";
import "./shop.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom"; 



const ShopPage = ({ match }) => {
  console.log(match.path);
  return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(ShopPage);
