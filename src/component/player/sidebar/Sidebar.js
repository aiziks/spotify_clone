import React from 'react'
import  './sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ListIcon from '@mui/icons-material/List';
import {connect} from 'react-redux';
import * as spotActions from '../../../redux/actions/spotify';
import  { bindActionCreators } from 'redux';

const Sidebar = (props) => {
    

    // console.log(playlists)


    return (
        <div className="sidebar">
            <img  className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            <SidebarOption title="Home" Icon={HomeIcon}  />
            <SidebarOption  title = "Search" Icon={SearchIcon} />
            <SidebarOption title = "Your Library" Icon={LibraryMusicIcon} />


            <br/>

            <strong className="sidebar_title"> PLAYLISTS </strong>
            <hr/>

            {props.spotify.playlists?.items?.map(playlist => (
                    <SidebarOption title = {playlist.name}  Icon={ListIcon} href={playlist.href}  />
            
            ))}
            
            
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
  
  export default connect(mapStateToProps , mapDispatchToProps)(Sidebar);
  
  