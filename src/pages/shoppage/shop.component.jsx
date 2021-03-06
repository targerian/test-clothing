import React from "react";
import "./shop.styles.scss"
import SHOP_DATA from "./shop.data.js"
import PreviewCollection from "../../components/preview-collection.component/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections : SHOP_DATA

        }
    }

    render(){
        const {collections} = this.state
        return <div className="shop-page">
            {collections.map(({id,...otherSectionProps}) => (<PreviewCollection 
            key={id}
            {...otherSectionProps}
            />
            ))}
        </div>
    }
}
export default ShopPage;