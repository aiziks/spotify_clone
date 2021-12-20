import {
  SET_TOKEN, SET_USER, SET_PLAYLIST , SET_DISCOVER_WEEKLY,SET_PLAYLIST_TRACKS
  } from "../actions/types";
  
  const initialState = {

    user : null,
    playlists : [],
    playing : false,
    item : null,
    discover_weekly : null,
    // token : 'BQDjA7UIOTBcMBhiofr1gxRbzCCIZXegyEJH3230bY-SLYHZBARSW-8B6dRCHBcmiDYMyrsEATc_Nc4Xx2BCqRHxVz2-md_smG6uY5i4MZLfDVcm1CszFYQ8L1QOb7hYh_uUbsnKczBR43DECtv69lbAtk_0o-BXnUdNW31aPRhcVA_a2yIn'
    token : null,
    
    tracksPlaylist :{images:[]},
    track_list:[],

}

const SpotReducer = (state=initialState , action) => {


    switch(action.type){
        
        case SET_TOKEN:
                
            return {
                
                ...state,
                token : action.token

            }

        case SET_USER:
            return {
                ...state,
                user: action.user
            }

        
        
        case SET_PLAYLIST:
                return {
                    ...state,
                    playlists : action.playlists
                }
        
        case SET_DISCOVER_WEEKLY:
                    return {
                        ...state,
                        discover_weekly : action.discover_weekly
                    }

        case SET_PLAYLIST_TRACKS:
            return {
                ...state,
                track_list : action.payload.tracks.items,
                tracksPlaylist : action.payload
            }
            
            
            default:
                return state
    }


}


export default SpotReducer