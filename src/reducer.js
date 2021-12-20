 const initialState = {

    user : null,
    playlists : [],
    playing : false,
    item : null,
    discover_weekly : null,
    // token : 'BQDjA7UIOTBcMBhiofr1gxRbzCCIZXegyEJH3230bY-SLYHZBARSW-8B6dRCHBcmiDYMyrsEATc_Nc4Xx2BCqRHxVz2-md_smG6uY5i4MZLfDVcm1CszFYQ8L1QOb7hYh_uUbsnKczBR43DECtv69lbAtk_0o-BXnUdNW31aPRhcVA_a2yIn'
    token : null

}

const reducer = (state , action) => {


    switch(action){
        
        case 'SET_TOKEN':
                
            return {
                
                ...state,
                token : action.token

            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        
        
        case 'SET_PLAYLIST':
            alert(action.playlists)
                return {
                    ...state,
                    playlists : action.playlists
                }
        
        case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly : action.discover_weekly
                    }
            
            default:
                return state
    }


}


export default reducer