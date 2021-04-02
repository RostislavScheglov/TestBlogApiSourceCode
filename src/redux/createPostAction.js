import axios from "axios"

 const createNewPostAction = (title, body) =>{
    return async dispatch=>{
      await axios.post('https://bloggy-api.herokuapp.com/posts',{
            'title': title,
            'body' : body
      })
      
        dispatch({
            type:'CREATE_NEW_POST',
        })
    }
}
export default createNewPostAction;