const getPostData = (title, body,id) =>{
    document.getElementById('update_post_form_input_title').value =title
    document.getElementById('update_post_form_input_body').value = body
    return{
            type:'GET_POST_DATA',
            payloadId:id
    }
 }
export default getPostData;