export const intialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
 token:"BQDVqUKXY1Iox3f_bIpgGDrgCj2VoNELpiEMneLpnwG1bnXgbMtbujIH20djAuFepnpCXWKGl1-XxMKmEzdDOE77zkmwA6piSdzf5mJrGSfmzS45ZdgsBiRVEQMZzrkErhXX2qgrbsYfQpgX9eaE0RrnW5Y62vq6PILSYcvEnTKX3G_LBAzd"
};

const reducer = (state,action) => {
 console.log(action);

//action --> type , [paylod]

  switch(action.type) {
 case 'SET_USER':
     return {
         ...state,
         user: action.user
     };

     case'SET_TOKEN':
     return{
         ...state,
         token:action.token,
     };

     case 'SET_PLAYLISTS':
     return{
         ...state,
         playlists:action.playlists,
     }


     default:
     return state;
 }
}
  

export default reducer;