import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayervalue } from './DataLayer';
import InstagramIcon from '@material-ui/icons/Instagram';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import MusicOffIcon from '@material-ui/icons/MusicOff';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';

function Sidebar() {
   const[{ playlists },dispatch] = useDataLayervalue();

    return (
        <div className="sidebar">
          <SidebarOption Icon={HomeIcon}title="Home"/>
          <SidebarOption Icon={SearchIcon}title="Search"/>
          <SidebarOption Icon={LibraryMusicIcon} title="Your Library "/>
            
           <br/>
           <strong className="sidebar__title">PLAYLISTS</strong>
           <hr/>
            {playlists?.items?.map(playlist => (
              <SidebarOption title={playlist.name}/>
            ))}
                <hr/>
            <div className="sidebar__icons">

              <SidebarOption Icon={InstagramIcon} title="Link you IG"/>
              
              <SidebarOption Icon={LibraryAddIcon} title="Add Library"/>
              
              <SidebarOption Icon={MusicOffIcon} title="Off Music"/>

              <SidebarOption Icon={ MusicVideoIcon} title="Video on"/>
            </div>

           

        </div>
    )
}

export default Sidebar
