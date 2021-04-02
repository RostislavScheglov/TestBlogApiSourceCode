import AllPosts from "./AllPosts";
import Header from "./Header"
import UpdatePostForm from "./UpdateForm";



const ComponentsWrapper =()=>{


function openModal() {
        let modal = document.getElementById('modalForm')
        modal.style.display = 'block'
}

function closeModal() {
    let modal = document.getElementById('modalForm')
    modal.style.display = 'none'
}
function openModalUpdate() {
    let modal = document.getElementById('updatePostModalForm')
    modal.style.display = 'block'
}

function closeModalUpdate() {
let modal = document.getElementById('updatePostModalForm')
modal.style.display = 'none'
}

return(
         <>
            <Header openModal={openModal} closeModal={closeModal} />
            <AllPosts  openModalUpdate={openModalUpdate}  />
            <UpdatePostForm closeModalUpdate={closeModalUpdate} />
        </>
     );
 
}

 export default ComponentsWrapper;