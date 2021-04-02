import axios from "axios"

 const getSpecificPostAction = (id) =>{
    return async dispatch=>{
        let res = await axios.get('https://bloggy-api.herokuapp.com/posts/'+id+'?_embed=comments');

        dispatch({
            type:'GET_SPECIFIC_POST',
            payloadTitle: res.data.title,
            payloadBody:res.data.body,
            payloadId:res.data.id,
            payloadComments:res.data.comments,
        })
    }
}
export default getSpecificPostAction;