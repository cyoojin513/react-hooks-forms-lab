import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const initialArray ={
    name: "",
    category: "Produce",
  }
  const [formData, setFormData] = useState(initialArray)

  function handleChange(e) {
    setFormData({
      ...formData,
      id: uuid(),
      [e.target.name]: e.target.value
    })
  }

  console.log(formData)

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({...formData,})
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
