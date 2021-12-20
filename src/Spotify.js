// https://developer.spotify.com/documentation/web-playback-sdk/quick-start

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "dd8a44f2fece4760a65b19a0317845ad"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    // console.log(window.location.hash)
    return window.location.hash
                .substring(1)
                .split('&')
                .reduce( (initial , item) => {
                    // console.log('initial before = ' , initial)
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1])
                    
                    // console.log('initial after = ' , initial)
                    return initial
                } , {} );

}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// http://localhost:3000/#access_token=BQBXcg4b1lmASvRRVGPiO0FwsQ-mcVyZQY_bDblkpf5Y4tVQOajA9ZWHLf6sjpjj7YiBvR6VbwyOX8dyl7_0MOmLS3ibV4B_JvhjA_e3SfV8UYEfjk5wq7da_fxNULzbG2NHytA6uGISCvZXXae9fImA7NJ3btgxbp8fZG0czsZj64RPeTxD&token_type=Bearer&expires_in=3600