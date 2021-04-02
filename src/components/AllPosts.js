import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {collectionImg, date} from '../assets/collection';
import getPostsAction from '../redux/getPostsAction';
import deletePostAction from '../redux/deletePostAction';
import getPostData from '../redux/getPostData';
import getSpecificPostAction from '../redux/getPostAction';
import "../styles/mainStyle.css";
import {NavLink} from 'react-router-dom'




const AllPosts =(props)=>{

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(getPostsAction())
    },[])

    function deletePost(id){
        dispatch(deletePostAction(id))
        setTimeout(()=>dispatch(getPostsAction()),200)
    }
    
   

    function updatePost(title,body,id){
        dispatch(getPostData(title, body, id))
        props.openModalUpdate()
    }

    const posts = useSelector(state => state.postsReducer.posts);

    let allPosts = posts.map(item=>(
        <div className="postItem" key ={item.id} > 
         <img className="contentImg" src={collectionImg[Math.random()*16|0]}   alt="Content Img"/>
         <div className="contentWrapper">
            <NavLink to={`/SpecificPost`} >
                <div onClick={()=>dispatch(getSpecificPostAction(item.id))}>
                <div className="Date">{date}</div>
                <p className="formTitle" key ={item.id + 1}>{item.title}</p>
                <p className="formBody" key ={item.id + 2}>{item.body}</p>
                </div>
            </NavLink>
    <button className="deleteBtn" onClick={()=>deletePost(item.id) } ></button>
    <button className="updateBtn" onClick={()=> updatePost(item.title, item.body, item.id)} ></button>
  </div>
  </div>
  ))
    




     return(
      <div className="wrapper">
         {allPosts}
      </div>
     );
     }
 
 
 export default AllPosts;