import React from "react";
import CollectionItem from "../collection-item.component/collection-item.component";
import "./peview-collection.styles.scss";
import {withRouter } from "react-router-dom";

const PreviewCollection = ({ title, items,linkUrl, match,history }) => {
    console.log(match)
    return (<div className="collection-preview">
        <h1 className="title"onClick={()=>history.push(`${match.path}/${title.toLowerCase()}`)} >{title.toUpperCase()}</h1>
        <div className="preview">
        {
            items.filter((item,index)=> index < 4).map((item)=> (
                <CollectionItem
                key={item.id} item={item}
                 />
            ))
        }

        </div>
    </div>)
}
export default withRouter(PreviewCollection);