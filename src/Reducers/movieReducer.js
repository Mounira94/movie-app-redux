


const initState = []


const movieReducer = (state=initState,action)=>{

   switch(action.type)
   {
 case 'ADD_MOVIE':
 return [...state,action.newMovie]
 break;
 case 'EDIT_MOVIE':
 return state.map(x=>{
     if(x.name===action.name){
         return action.movie
     }
     return x
 })
 break;
 case 'DELETE_MOVIE':

 return state.filter(x=>x!=action.name)
 break;
 default: 
 return state


   }
}


export default movieReducer