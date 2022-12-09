import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  image_url: "",
  price: "",
  rating: "",
};

function AddGroceries() {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://groceries-production-1.up.railway.app/groceries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    setFormData({
        name: '',
        image_url: '',
        price: '',
        rating:''
    })
    console.log(formData)

    navigate("/ourgroceries")

  }

  return (
    <div className="card">
      <h2>New Groceries</h2>
      <form onSubmit={handleSubmit}>
        <label className="name">Name: </label>
        <input
          type="text"
          id="name"
          value={formData.title}
          onChange={handleChange}
        />
        <label className="image_url">Image URL: </label>
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <label className="price">Price: </label>
        <input
          type="text"
          id="price"
          value={formData.notes}
          onChange={handleChange}
        />
        <label className="rating">Rating: </label>
        <input
          id="rating"
          value={formData.description}
          onChange={handleChange}
        />
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddGroceries;