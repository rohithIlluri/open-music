import { SearchOutlined } from '@material-ui/icons';
import React from 'react'
import "./Header.css"
import { Avatar } from "@material-ui/core";
import { useDataLayervalue } from './DataLayer';


function Header() {
const [{ user }, dispatch] = useDataLayervalue();
    return (
        <div className="header">
            <div classname="header__left">
                
                <SearchOutlined/>
                <input placeholder="Search for Artists, Songs, Albums,.." 
                type="text"
                />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                
                <h4>{user?.display_name}</h4>
                   
            </div>
        </div>
    );
};

export default Header
