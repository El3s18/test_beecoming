import './App.css';
import React, { Fragment, useState } from 'react';
import data from './city.json';
import {nanoid} from 'nanoid';
import ReadOnlyCity from './ReadOnlyCity';
import EditableCity from './EditableCity';


function App() {
const [citys, setCity] = useState(data);
const [addFormData, setAddFormData] = useState({
  'country' : '',
  'city' : '',
  'population' : ''
})

const [editFormData, setEditFormData] = useState({
  'country' : '',
  'city' : '',
  'population' : ''
})

const handleAddFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = { ...addFormData};
  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
};

const handleEditFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const newFormData = { ...editFormData};
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
  event.preventDefault();

  const newCity = {
    id : nanoid(),
    country : addFormData.country,
    city : addFormData.city,
    population : addFormData.population,
  }

  const newCitys = [ ...citys, newCity];
  setCity(newCitys);
}

const handleEditFormSubmit = (event) => {
  event.preventDefault();

  const editCity = {
    id: editCityId,
    city: editFormData.city,
    country: editFormData.country,
    population: editFormData.population,
  };

  const newCity = [...citys];

  const index = citys.findIndex((city) => city.id === editCityId);

  newCity[index] = editCity;

  setCity(newCity);
  setEditCityId(null);
}

const [editCityId, setEditCityId] = useState(null)

const handleEditClick = (event, city) => {
  event.preventDefault();
  setEditCityId(city.id);

  const formValue  = {
  country : city.country,
  capital : city.city,
  population : city.population
  }
  setEditFormData(formValue);
}

const handleCancelClick = () => {
  setEditCityId(null);
};

const handleDeleteClick = (cityId) => {
  const newCitys = [...citys];

  const index = citys.findIndex((city) => city.id === cityId);

  newCitys.splice(index, 1);

  setCity(newCitys);
};


  return(
    <div className='App-header'>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {citys.map((city) => (
            <Fragment>
              {editCityId === city.id ? (
              <EditableCity editFormData={editFormData} 
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}/>
              ) : (
              <ReadOnlyCity 
              city={city}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}/>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
      <h2>Add a city</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
        type='text' 
        name='country' 
        required='required' 
        placeholder = 'New country' 
        onChange={handleAddFormChange}
        >
        </input>
        <input
         type='text' 
         name='country' 
         required='required' 
         placeholder = 'New capital'
         onChange={handleAddFormChange}
         >
         </input>
        <input 
        type='text' 
        name='population' 
        required='required' 
        placeholder = 'Population'
        onChange={handleAddFormChange}
        >
        </input>
        <button type='Submit'>Add</button>
      </form>
      </form>
    </div>
  )
}




export default App;