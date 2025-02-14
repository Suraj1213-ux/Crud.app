/*import React from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import hooks
import { increment,decrement } from './components/slice';  // Import actions

const Counter = () => {
  const dispatch = useDispatch();  // Hook to dispatch actions
  const counterValue = useSelector((state) => state.counter.value);  // Access counter value from the store

  return (
    <div>
      <h1>Counter: {counterValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;*/
import "./App.css";
import React, { useEffect, useState } from "react";
import { Employeedata } from './components/Employeedata';

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);


  useEffect(() => {
    setData(Employeedata);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter(item => item.id===id);
    if(dt!==undefined)
    {
      setIsUpdate(true)
      setId(id)
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age)
    }
  }

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  }
  
  const handleSave = (id) => {
    alert(id)
  }

  const handleUpdate = () => {
    const dt = [...data];
    const item = dt.find((item) => item.id === id);
  
    if (item) {  // Check if the item exists in the data array
      item.firstName = firstName;
      item.lastName = lastName;
      item.age = age;
  
      setData(dt);
      handleClear();
    } else {
      console.error("Item with id not found:", id);
    }
  };

  const handleClear = (id) => {
    setId(0)
    setFirstName('');
    setLastName('');
    setAge('');
    setIsUpdate(false)
  }
  return (
    <>
    <div className="App">
    
    <div style={{display : 'flex', justifyContent : 'center', marginTop : "10px", marginBottom : "10px"}}>
      <div>
        <label>First Name :
          <input type="text" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)}  value={firstName} />
        </label>
      </div>
      <div>
        <label>Last Name :
          <input type="text" placeholder="Enter last Name" onChange={(e) => setLastName(e.target.value)}  value={lastName}/>
        </label>
      </div>
      <div>
        <label>age :
          <input type="text" placeholder="Enter age" onChange={(e) => setAge(e.target.value)}  value={age}/>
        </label>
      </div>
      <div>
      {!isUpdate ? (
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
          ) : (
            <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
          )}
          &nbsp;
      
      <button className="btn btn-danger" onClick={() => handleClear()}>Clear</button>
      </div>
    </div>
  
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default App;
