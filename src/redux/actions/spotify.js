import axios from "axios";

import {
  SET_TOKEN, SET_USER, SET_PLAYLIST , SET_DISCOVER_WEEKLY, SET_PLAYLIST_TRACKS
  } from "../actions/types";


// WALLET BALANCES
export const set_token = (token) => (dispatch, getState) => {

  console.log('my  getState is : ' + getState() )
  

  dispatch({
    type: SET_TOKEN,
    token : token
})
  
};


export const set_user = (user) => (dispatch, getState) => {


  dispatch({
    type:SET_USER,
    user: user
  })
  
};


export const set_playlist = (playlists) => (dispatch, getState) => {

  dispatch({
    type: SET_PLAYLIST,
    playlists : playlists
  })
  
  
};


export const set_discover_weekly = (response) => (dispatch, getState) => {

  dispatch({
            type:SET_DISCOVER_WEEKLY,
            discover_weekly:response
        })
  
};




export const set_playlist_tracks = (href) => (dispatch, getState) => {

  console.log(tokenConfig(getState) )

  //making axios get request
 axios
 .get(href,   tokenConfig(getState)) 
 .then((res) => {
  //  console.log(res.data);
  //  debugger;

   dispatch({
     type: SET_PLAYLIST_TRACKS,
     payload: res.data,
   });

  
 })


  
};



//Setup config with token stored in the localStorage in the browser
export const tokenConfig = (getState) => {
  //Get token from the current state
  const token = getState().spotify.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
 



