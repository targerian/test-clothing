import React from "react";
import "./homepage-component.style.scss"

const HomePage = e => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title1</h1>
                    <span className="subtitle">subtitle1</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title2</h1>
                    <span className="subtitle">subtitle2</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title3</h1>
                    <span className="subtitle">subtitle3</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title4</h1>
                    <span className="subtitle">subtitle4</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Title5</h1>
                    <span className="subtitle">subtitle5</span>
                </div>
            </div>
            
        </div>
    </div>
)

export default HomePage;