import React, { useState } from "react";

import "./UserInput.css";

function UserInput({ setUserInput }) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [social, setSocial] = useState("");

  //Updates userInput stat
  const onInputFormSubmit = (e) => {
    e.preventDefault();
    setUserInput({ category: category, description: description, social: social });
    setCategory("");
    setDescription("");
    setSocial("");
  };

  return (
    <div className='input-form'>
      <h3>Promotional Content:</h3>
      <form>
        <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value=''>--Select Category--</option>
          <option value='product'>Product</option>
          <option value='event'>Event</option>
        </select>
        <textarea
          type='text'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Write a short description...'
          required
        />
        <select name='social' value={social} onChange={(e) => setSocial(e.target.value)} required>
          <option value=''>--Select Social--</option>
          <option value='facebook'>Facebook</option>
          <option value='twitter'>Twitter</option>
          <option value='instagram'>Instagram</option>
        </select>
        <button type='submit' onClick={onInputFormSubmit}>
          Generate
        </button>
      </form>
    </div>
  );
}

export default UserInput;
