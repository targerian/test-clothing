import React from "react";
import collectionItem from "../../components/collection-item.component/collection-item.component";
import "./collection.styles.scss"

const CollectionPage = ({ match}) => {
    console.log(match)
    return(
    <div className="category">
        <h2>this is a category page component and the param is{match.params.categoryId}</h2>       
    </div>
)}
export default CollectionPage;

