import axios from "axios";

const deletePostAction = (id) =>{
    return async dispatch=>{
       axios.delete('https://bloggy-api.herokuapp.com/posts/'+id,{
      })
        dispatch({
            type:'DELETE_POST',
            
        })
    }
}
export default deletePostAction;
