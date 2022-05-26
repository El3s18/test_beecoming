import react from 'react'

const ReadOnlyCity = ({city, handleEditClick, handleDeleteClick }) => {
    return(
        <tr>
            <td>{city.country}</td>
            <td>{city.city}</td>
            <td>{city.population}</td>
            <td><button type='button' onClick={event => handleEditClick(event, city)}>Edit</button></td>
            <button type="button" onClick={() => handleDeleteClick(city.id)}>
          Delete
        </button>
        </tr>
    )
}

export default ReadOnlyCity;