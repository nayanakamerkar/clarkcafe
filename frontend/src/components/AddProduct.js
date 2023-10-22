// client/src/components/AddProduct.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categoryId: '',
    tagId: '',
    isActive: true,
    prepTime: '',
    facts: '',
  });
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Fetch categories and tags from backend
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:4000/api/products/categories-tags', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setCategories(res.data.categories);
        setTags(res.data.tags);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:4000/api/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      toast.success('Product added successfully');
      console.log(res.data);
      setFormData({
        name: '',
        price: '',
        categoryId: '',
        tagId: '',
        isActive: '',
        prepTime: '',
        facts: '',
      });
    } catch (err) {
      toast.error('Failed to add product');
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={onChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Tags</label>
        <select
          name="tagId"
          value={formData.tagId}
          onChange={onChange}
          required
        >
          <option value="">Select Tag</option>
          {tags.map((tag) => (
            <option key={tag._id} value={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Preparation Time</label>
        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Facts</label>
        <textarea
          name="facts"
          value={formData.facts}
          onChange={onChange}
          required
        ></textarea>
      </div>
      <div>
        <input
          type="checkbox"
          name="isActive"
          checked={formData.isActive}
          onChange={() => setFormData({ ...formData, isActive: !formData.isActive })}
        />
        <label>Is Active</label>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
