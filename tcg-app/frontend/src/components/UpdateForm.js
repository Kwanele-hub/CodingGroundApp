import React, {useState, useSelector} from 'react'




const UpdateForm = ({freeCodeCamp, typing, codeWars, blogPost,remove ,id, complete,}) => {
  const [edit,setEdit] = useState(false);
  const [update,setUpdate] = useState(freeCodeCamp, typing, blogPost, codeWars)
  const Form = useSelector(state =>state.items.update)
  

const handleEditSubmit = (id) => {
let newObj = Form.find(newItem => newItem.id === id )
newObj.useState = update
return (editItem(newObj))


  }
const handleEditChange = (e) => {
    setUpdate(e.target.value);
  };
  const handleEdit = () => {
    setEdit(!edit);
  };



  return(
    <div>
 <li className='item'>
     <table>
       <tbody>
         
       <tr>
            <th>freeCodeCamp</th>
          <th>typing</th>
          <th>codeWars</th>
          <th>blogPost</th>
          
            </tr>
    <td>{freeCodeCamp}</td>
    <td>{blogPost}</td>
    <td>{codeWars}</td>
    <td>typing</td>
       </tbody>
           
        </table>
    
    <button onClick={()=> (deleteItem(remove(id)))}>delete</button>
    {freeCodeCamp, blogPost, codeWars, typing.id}
      {!edit ? (
        <>
      
          <span>{freeCodeCamp, blogPost, codeWars, typing.task}</span>{" "}
          <button onClick={handleEdit} disabled={freeCodeCamp,codeWars,typing,blogPost.completed}>
            Edit
          </button>
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            value={update}
            name="update"
            onChange={handleEditChange}
          />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit" onClick={() => handleEditSubmit(id)}>
            Save
          </button>
        </>
      )}
    
    <button onClick={()=>  (completeItem(complete(id)))}>complete</button>
    
  </li>
  
    </div>
  )
}

export default UpdateForm