import { Link } from "react-router-dom";
import './mainMenu.css'
import { useEffect, useState } from "react";

export default function MainMenu() {
    var actives = []
    var inactives = []
    useEffect(() => {
        console.log(document.querySelectorAll(".widg"))
    })
    const [Widget, setWidget] = useState("W")
    const [text, setText] = useState("welcome")
    const [desc, setDesc] = useState("ratio")
    return (
        <div className="mainMenuContainer">
            <div className="links">
                <Link to="FUT"><p onMouseEnter={() => {
                    setWidget("UT")
                    setText("create good team frfr")
                    setDesc("sui")
                }}>Ultimeate Team</p></Link>
                <Link to="managerCareer"><p onMouseEnter={() => {
                    setWidget("MC")
                    setText("good tactics or u bad")
                    setDesc("classic incoming or?")
                }}>Manager Career</p></Link>
            </div>
            <div className="widget">
                <div className="picto"><p className="textPicto">{Widget}</p></div>
                <p className="widgetText">{text}</p>
                <p className="widgetDesc">{desc}</p>
                <div className="widgetButton"></div>
            </div>
        </div>
    )
}