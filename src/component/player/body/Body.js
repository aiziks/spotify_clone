import React  from 'react'
import './body.css';
import Header from './header/Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './songrow/SongRow';
import {connect} from 'react-redux';
import * as spotActions from '../../../redux/actions/spotify';
import  { bindActionCreators } from 'redux';


const Body = (props) => {
 
  

    return (
        <div className="body">
            
            <Header  />

            <div className="body_info">
  

               { props.spotify.tracksPlaylist.images.length > 0 ? (<img  src={props.spotify.tracksPlaylist.images[0].url }  alt="" />)  : "" }
               {/* { props.spotify.user.images.length > 0 ? "": (  <img  src={props.spotify.tracksPlaylist.images[0].url }  alt="" /> )  :  ( <img  src={props.spotify.user.images[0].url } alt="" /> } */}
                
                <div className="body_infotext">
                    <strong> Playlist </strong>
                    <h2> Discover Weekly </h2>
                    <p>{props.spotify.discover_weekly?.description }</p>

                </div>

            </div>


            <div className="body_songs">

                <div className="body_icon">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon  fontSize="large" />
                    <MoreHorizIcon />
                </div>


                {/* list of songs */}
                { props.spotify.track_list.length > 0 && props.spotify.track_list.map( item =>(
                    <SongRow track={item.track} />
                )) }

              

            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    spotify : state.spotify
    
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      actions : bindActionCreators(spotActions , dispatch)
    }
  }
  
  export default connect(mapStateToProps , mapDispatchToProps)(Body);
  
  
