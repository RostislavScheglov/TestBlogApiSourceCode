import axios from "axios"

 const getPostsAction = () =>{
    return async dispatch=>{
        let res = await axios.get('https://bloggy-api.herokuapp.com/posts')

        dispatch({
            type:'GET_POSTS',
            payload:res.data
        })
    }
}
export default getPostsAction;