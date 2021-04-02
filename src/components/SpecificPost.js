import { useDispatch, useSelector } from 'react-redux';
import getSpecificPostAction from '../redux/getPostAction'
import "../styles/mainStyle.css";
import {collectionImg, date} from '../assets/collection';
import { NavLink} from 'react-router-dom';
import createNewCommentAction from '../redux/createComment';

const SpecificPost =(props)=>{

    const id = useSelector(state => state.postsReducer.postId);
    const title = useSelector(state => state.postsReducer.postTitle);
    const body = useSelector(state => state.postsReducer.postBody);
    const comments = useSelector(state => state.postsReducer.comments);

    const dispatch = useDispatch()
    let mapedComments = comments.map(comment=>(<p className="comment" key={comment.id}>{comment.body}</p>))

  

    function commentPost(){
        let bodyText = document.getElementById('update_post_form_input_body').value
        dispatch(createNewCommentAction(id,bodyText));
        setTimeout(()=>dispatch(getSpecificPostAction (id)),300)
        document.getElementById('update_post_form_input_body').value = ''
    }

     return(
      <div className ="specificWrapper">
        <NavLink to="/" className="linkBack">Back to all posts</NavLink>
        <div className="specififcpostItem" > 
        <img className="contentImg" src={collectionImg[Math.random()*16|0]}   alt="Content Img"/>
            <div className="contentWrapper">
              <div>
                <div className="Date">{date}</div>
                <p className="formTitle" >{title}</p>
                <p className="formBody" >{body}</p>
                <div className="comments">Commments:{mapedComments}</div>
              </div>
            </div>
         </div>

         <div id="create_comment_form">
            <h2 className="create_comment_title">Create New Comment</h2>
            <input id="update_post_form_input_body" className="createComment_input_body" 
                type = 'text' placeholder="Comment"/>
            <button type='submit' id="createPost_button_submit" 
              onClick={()=>commentPost()}>Submit</button> 
             <button id="createPost_button_cancel" 
              onClick={()=> props.closeModalUpdate()}>Cancel</button>
         </div>

      </div>
     );
     }
 
 
 export default SpecificPost;