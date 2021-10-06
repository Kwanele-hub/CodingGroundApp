import React from 'react';
import UpdateForm from './UpdateForm';

const Edit = () => {
    const formData =(state => state.formData.update)
    
    const deleteItem =(id)=>{
    return formData.filter(item=> item.id !== id)
    }
    
    const completedItem = () =>({
    })
        return(
            

    <ul className={'item-list'}>
        {formData && formData.map(item => (
            <UpdateForm key={ item.id } {...item}  remove={deleteItem} complete={completedItem} />
        ))}
    </ul>
    )
    
} 
export default Edit
