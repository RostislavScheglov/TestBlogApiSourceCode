let initialState = {
    posts:[],
    comments:[],
    postId:[],
    postTitle:[],
    postBody:[],
 }
   
    function postsReducer (state = initialState, action) {
 
         switch (action.type) {
                   case 'GET_POSTS':
                     return {
                      ...state,
                      posts: action.payload
                     }
                   case 'GET_SPECIFIC_POST': {
                     return{
                        ...state,
                        postTitle:action.payloadTitle,
                        postBody:action.payloadBody,
                        postId:action.payloadId,
                        comments:action.payloadComments
                     }
                  }
                   case 'CREATE_NEW_POST': {
                      return{
                         ...state,
                      }
                   }
                   case 'CREATE_NEW_COMMENT': {
                     return{
                        ...state,
                     }
                  }
                   case 'DELETE_POST': {
                      return {
                         ...state
                      }
                  }
                case 'GET_POST_DATA': {
                  return{
                     ...state,
                     postTitle:action.payloadTitle,
                     postBody:action.payloadBody,
                     postId:action.payloadId
                  }
               }
                case 'UPDATE_POST': {
                   return{
                      ...state,
                   }
               }
                   default:
                      return state
               }
 
 
 }   
 
 
 export default postsReducer;