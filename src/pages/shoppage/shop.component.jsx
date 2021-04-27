import React from "react";
import "./shop.styles.scss"
import PreviewCollection from "../../components/preview-collection.component/preview-collection.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const ShopPage = ({collections}) =>
    {
        
        return <div className="shop-page">
            {collections.map(({id,...otherSectionProps}) => (<PreviewCollection 
            key={id}
            {...otherSectionProps}
            />
            ))}
        </div>
    }
const mapStateToProps = createStructuredSelector({
    collections : selectShopCollection
})

export default connect(mapStateToProps)(ShopPage);