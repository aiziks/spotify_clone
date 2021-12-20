import React from 'react'
import './sidebaroption.css'
import {connect} from 'react-redux';
import * as spotActions from '../../../redux/actions/spotify';
import  { bindActionCreators } from 'redux';
import ListIcon from '@mui/icons-material/List';


const SidebarOption = (props) => {


    const handlePlaylistTracks = (e) =>{
        
        // alert(props.href)
        props.actions.set_playlist_tracks(props.href)

    }



    return (
        <div className="sidebarOption" onClick={handlePlaylistTracks}>
            { props.Icon  && <ListIcon className="sidebaroption__icon" /> }
            { props.title ? <h4> {props.title} </h4> : <p>{props.title}</p> }
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
  
  export default connect(mapStateToProps , mapDispatchToProps)(SidebarOption);
  
  