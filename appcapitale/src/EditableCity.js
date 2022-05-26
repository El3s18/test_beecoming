import React from "react";

const EditableCity = ({editFormData , handleEditFormChange , handleCancelClick}) => {
    return(
        <tr>
            <td>
                <input 
                type='text' 
                name='country' 
                required='required' 
                placeholder='Enter country' 
                onChange={handleEditFormChange} 
                value={editFormData.country}></input>
            </td>
            <td>
                <input type='text' name='city' required='required' placeholder='Enter city' onChange={handleEditFormChange} value={editFormData.city}></input>
            </td>
            <td>
                <input type='text' name='population' required='required' placeholder='Enter population' onChange={handleEditFormChange} value={editFormData.population}></input>
            </td>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancelClick}>Supprimer</button>
        </tr>
    )
}

export default EditableCity;