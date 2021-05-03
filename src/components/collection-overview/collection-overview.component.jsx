import React from "react";
import "./collection-overview.styles.scss";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionOverview } from "../../redux/shop/shop.selector";
import PreviewCollection from "../preview-collection.component/preview-collection.component";

 const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id,...otherSectionProps}) => (<PreviewCollection 
            key={id}
            {...otherSectionProps}
            />
            ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections : selectCollectionOverview
})
export default connect(mapStateToProps)(CollectionOverview);