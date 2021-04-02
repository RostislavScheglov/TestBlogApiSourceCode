import "../styles/mainStyle.css";
import { useDispatch} from 'react-redux';
import createNewPostAction from '../redux/createPostAction';
import getPostsAction from '../redux/getPostsAction';
const Header =(props)=>{

    const dispatch = useDispatch()

    function createNewPost () {
            let title = (document.querySelector('#create_new_post_form_input_title')).value
            let body = (document.querySelector('#create_new_post_form_input_body')).value
            dispatch(createNewPostAction(title,body))
            setTimeout(()=>dispatch(getPostsAction()),200)
            props.closeModal()
          }


     return(
        <div>
         <nav className = "navig">
                <div className="navigContainer">
                    <div className="linkContainer">
                    </div>
                <button id="createPost_button_create" onClick={()=> props.openModal()} >Create New Post</button>
                </div>
            </nav>

        <div id = 'modalForm' className="create_post_form_modal" >
            <div id="create_post_form">
                <h2>Create New Post</h2>
                <input id="create_new_post_form_input_title" className="createPost_input_title" 
                    type = 'text' placeholder="Post Title" />
                <input id="create_new_post_form_input_body" className="createPost_input_body" 
                    type = 'text' placeholder="Post Body" />

                <button type='submit' id="createPost_button_submit" 
                    onClick={()=> createNewPost()} >Submit</button>

                <button id="createPost_button_cancel" 
                    onClick={()=> props.closeModal()} >Cancel</button>
            </div>
        </div>
        </div>
     );
 
     }

 export default Header;