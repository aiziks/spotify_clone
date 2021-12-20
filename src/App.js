
import React , {useEffect} from 'react'
import {connect} from 'react-redux';
import * as spotActions from './redux/actions/spotify';
import  { bindActionCreators } from 'redux';
import './index.css'
import { getTokenFromUrl } from './Spotify'
import SpotifyWebApi from 'spotify-web-api-js';
// import { useDataLayerValue } from './DataLayer';
import Player from './component/player/player';
import Login from './component/Login/Login';

// creating spotify instance; i.e from SpotifyWebApi class
const spotify = new SpotifyWebApi();

const App = (props) => {



    // AUTHENTICATION 
    // run code based on the given condition
   
    useEffect(() => {

        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token;
        

        if (_token){
            
            console.log(spotify)

            props.actions.set_token(_token)

            //setting the spotify access token
            spotify.setAccessToken(_token)     

            

            // get the spotify user
            spotify.getMe().then(user => {
                props.actions.set_user(user)
            });

               
        
            spotify.getUserPlaylists().then((playlists) => {
                console.log(playlists)
                props.actions.set_playlist(playlists)
            })

            // spotify.getPlaylist('').then(response => {
                
            //     props.actions.set_discover_weekly(response)

            // })

        
        }
    
    })



  
 

    return (
        <div className="App">

            {/* spotify logo */}
            {/* login with spotify button */}
            {/* {window.location.hash? alert(window.location.hash) : ""} */}

            {   
                props.spotify.token ?
                (
                    <Player   />
                )
                :
                
                (
                        <Login />
                )
            }
            

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

export default connect(mapStateToProps , mapDispatchToProps)(App);


