import axios from "axios"

 const createNewCommentAction = (id, body) =>{
    return async dispatch=>{
      await axios.post('https://bloggy-api.herokuapp.com/comments',{
            'postId': id,
            'body' : body
      })
      
        dispatch({
            type:'CREATE_NEW_COMMENT',
        })
    }
}
export default createNewCommentAction;