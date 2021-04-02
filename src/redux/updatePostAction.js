import axios from "axios"

 const updatePostAction = (title, body, id) =>{
    return async dispatch=>{   
      await axios.put('https://bloggy-api.herokuapp.com/posts/'+id,{
            'title': title,
            'body' : body
      })
      
        dispatch({
            type:'UPDATE_POST',
        })
    }
}
export default updatePostAction;