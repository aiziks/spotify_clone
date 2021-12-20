import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import './header.css';
import {connect} from 'react-redux';
import * as spotActions from '../../../../redux/actions/spotify';
import  { bindActionCreators } from 'redux';

const Header = (props) => {


    return (

        <div className="header" >

            <div className="header_left" >
                <SearchIcon />
                <input placeholder="Search for artist , song on " type="text" />

            </div> 
            <div className="header_right" >
                <Avatar src={props.spotify.user?.images[0]?.url } alt="AZ" />
                <h4> {props.spotify.user ? props.spotify.user.display_name : "Aiziks" } </h4>
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
  
  export default connect(mapStateToProps , mapDispatchToProps)(Header);
  
  
