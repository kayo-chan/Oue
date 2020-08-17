import React from "react"
import "./MainPage.css"
import "../style.css"
// import pic from "../pic.jpg"

function MainPage() {
   
    
    return (
        <div className="container-for-all">
            <header className="header">
                <div className="header-container">

                    {/* The Logo */}
                    <div className="logo">
                        <h1 className="logo-first-line">WAKE UP WORLD</h1>
                        <h4 className="logo-second-line">The time is <span className="logo-emphasis">near</span></h4>
                    </div>

                    {/* The navigation of the main page */}
                    <nav className="navigation">
                        <ul className="nagigation-list">
                            <li>Home</li>
                            <li>Topics</li>
                            <li>Spreading the truth</li>
                            <li>About me</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
            

        </div>
    )
}

export default MainPage