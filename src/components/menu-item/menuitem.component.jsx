import React from "react";
import "./menu-item.styles.scss"

const MenuItem = (props) => (
            <div 
                 className= {`${props.size} menu-item`}>
                <div style={{
                backgroundImage: `url(${props.imageUrl})`
                }} className="background-image" />
                    <div className="content">
                       <h1 className="title">{props.title.toUpperCase()}</h1>
                      <span className="subtitle">subtitle1</span>
                     </div>
                
            </div>
)
export default MenuItem;    