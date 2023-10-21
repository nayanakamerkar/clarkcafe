// client/src/components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    categoryId: '',
    tagsId: [],
    isActive: true,
    image: '',
    prepTime: '',
    facts: '',
  });

  const { productName, price, categoryId, tagsId, isActive, image, prepTime, facts } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/api/products', formData, {
        headers: {
          'x-auth-token': localStorage.getItem('token'), // pass the token for authentication
        },
      });

      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          value={productName}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={price}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Category ID"
          name="categoryId"
          value={categoryId}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Tags ID (comma separated)"
          name="tagsId"
          value={tagsId}
          onChange={(e) => setFormData({ ...formData, tagsId: e.target.value.split(',') })}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Preparation Time"
          name="prepTime"
          value={prepTime}
          onChange={onChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Facts"
          name="facts"
          value={facts}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="isActive"
          checked={isActive}
          onChange={(e) => setFormData({ ...formData, isActive: !isActive })}
        />
        <label>Is Active</label>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
