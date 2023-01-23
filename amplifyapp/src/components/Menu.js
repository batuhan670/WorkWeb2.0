import React from 'react';
import "./MenuStyles.css";

const Menu = () => {
    return (
        <div id="Menu">
            <select id="Menu">
                <option value="1">light</option>
                <option value="2">dark</option>
                <option value="3">custom</option>
            </select>
        </div>
    )
}

export default Menu
