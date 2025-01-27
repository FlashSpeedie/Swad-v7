import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [foodCount, setFoodCount] = useState(0);  

  // Fetch the food list from the backend
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);

      console.log('Food List Response:', response); 

      if (response.data.success) {
        setList(response.data.data);
        setFoodCount(response.data.data.length); 
      } else {
        console.error('Error fetching list');
      }
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <p>Total Food Count: {foodCount}</p> 
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price.toFixed(2)}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
