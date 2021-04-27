import React from "react";
import "./directory.styles.scss"
import MenuItem from "../menu-item/menuitem.component"
import {connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({sections}) =>
        (
            <div className="directory-menu">
            {sections.map(({id,...otherSectionProps}) => (<MenuItem 
            key={id}
            {...otherSectionProps}
            />))}
        </div>
        )
    


const mapDispatchToProps = createStructuredSelector(
  {sections: selectDirectorySections}
)
export default connect(mapDispatchToProps)(Directory);