import React from 'react';
import {  useSelector } from 'react-redux';
import UpdateForm from './UpdateForm';

const Edit = () => {
    const items = useSelector(state => state.items.update)
    
    const deleteItem =(id)=>{
    return items.filter(item=> item.id !== id)
    }
    
    const completedItem = () =>({
    })
        return(
            

    <ul className={'item-list'}>
        {items && items.map(item => (
            <UpdateForm key={ item.id } {...item}  remove={deleteItem} complete={completedItem} />
        ))}
    </ul>
    )
    
} 
export default Edit
