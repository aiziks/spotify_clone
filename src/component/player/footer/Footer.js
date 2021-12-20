import React from 'react'
import './footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid , Slider } from '@mui/material';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';


const Footer = (props) => {
    return (
        <div className="footer" >
            <div className="footer_left" >
            {/* <img className="footer_albumlogo" src="https://upload.wikimedia.org/wikipedia" alt="AZ" /> */}
            <LibraryMusicIcon/>
            <div className="footer_songInfo" >
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>

        </div>

        <div className="footer_center" >
            <ShuffleIcon className="footer_green" />
            <SkipPreviousIcon className="footer_icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
            <SkipNextIcon className="footer_icon" />
            <RepeatIcon className="footer_green" />

        </div>

        <div className="footer_right" >
            <Grid container spacing={2}>
                <Grid item >
                    <PlaylistPlayIcon  />
                </Grid>

                <Grid item >
                    <VolumeDownIcon />
                </Grid>

                <Grid item  xs >
                    <Slider size="small" />
                </Grid>

            </Grid>
        </div>
        </div>
    )
}

export default Footer
