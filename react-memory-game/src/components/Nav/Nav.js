import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-bar nav-justified">
            <li>
                <a href="/">DC Universe Memory Game</a>
            </li>
            <li className={props.message.indexOf("incorrectly") !== -1 ?
                "desc-incorrect" :
                "desc-normal"}
            >
                {props.message}

            </li>
            <li>
                Score: <span>{props.curScore}</span> | Top Score: {props.topScore}
            </li>
        </ul>
    </div>
);

export default Nav;