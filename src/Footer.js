import React from 'react'
import "./Footer.css";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";



function Footer() {
    return (
        <div className="footer">
           <div className="footer__left">
              <img className="footer__albumlogo" 
              src="" alt=""/>
              <div className="footer__songInfo">
                  <h4>Yeah!</h4>
                  <p>Usher</p>
              </div>
           </div>
           
           <div className="footer__center">
               
               <ShuffleOutlinedIcon className="footer__green"/>
                <SkipPreviousOutlinedIcon className="footer__icon"/>
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon"/>
                <SkipNextOutlinedIcon className="footer__icon"/>
                <ReplayOutlinedIcon classname="footer__green"/>
           </div>

           <div className="footer__right">
           <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
           </div>
        </div>
    )
}

export default Footer
