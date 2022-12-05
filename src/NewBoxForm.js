import React, { useState } from 'react';
import './NewBoxForm.css';
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ addBoxToList }) => {
  const INITIAL_STATE = {
    backgroundColor: '',
    height: '',
    width: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBoxToList({ ...formData, id: uuidv4() });
    console.log(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className="NewBoxForm">
      <label htmlFor="backgroundColor" className="NewBoxForm-label">
        Color:
      </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Color"
        value={formData.backgroundColor}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <label htmlFor="height" className="NewBoxForm-label">
        Height:
      </label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <label htmlFor="width" className="NewBoxForm-label">
        Width:
      </label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
        className="NewBoxForm-input"
      />
      <button className="NewBoxForm-btn">Add Box</button>
    </form>
  );
};

export default NewBoxForm;
