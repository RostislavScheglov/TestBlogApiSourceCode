import { useDispatch, useSelector } from 'react-redux';
import getPostsAction from '../redux/getPostsAction';
import updatePostAction from "../redux/updatePostAction";
import "../styles/mainStyle.css";

const UpdatePostForm =(props)=>{
    
    const dispatch = useDispatch()
    const postId= useSelector(state => state.postsReducer.postId);

    function updatePost (id){
        let title = document.getElementById('update_post_form_input_title').value
        let body = document.getElementById('update_post_form_input_body').value
        dispatch(updatePostAction(title,body,id))
        setTimeout(()=>dispatch(getPostsAction()),200)
        props.closeModalUpdate()
    }
     return(
        <div id = 'updatePostModalForm' className="create_post_form_modal" >
         <div id="create_post_form">
            <h2>Update New Post</h2>
            <input id="update_post_form_input_title" className="createPost_input_title" 
                type = 'text' placeholder="Post Title"/>
            <input id="update_post_form_input_body" className="createPost_input_body" 
                type = 'text' placeholder="Post Body"/>
            <button type='submit' id="createPost_button_submit" 
                onClick={()=> updatePost(postId)}>Submit</button> 
             <button id="createPost_button_cancel" 
                onClick={()=> props.closeModalUpdate()} >Cancel</button>
         </div>
        </div>
     );
 }
 
 
 export default UpdatePostForm;