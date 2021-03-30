export const intialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
};

const reducer = (state,action) => {
 console.log(action);

//action --> type , [paylod]

  switch(action.type) {
 case 'SET_USER':
     return {
         ...state,
         user: action.user
     }

     default:
     return state;
 }
}
  

export default reducer;