import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Create(){
    const [users,setUsers] = useState({});
    const dispatch=useDispatch();

    

    const getUserData=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
        console.log(users);
    }

    const handleSubmit=()=>{
        
    }
    return(
        <div>
        <h2 className="my-2">Fill the data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              onChange={getUserData}
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              onChange={getUserData}
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Age</label>
            <input
              type="text"
              name="age"
              class="form-control"
              onChange={getUserData}
              required
            />
          </div>
          <div class="mb-3">
            <input
              class="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              onChange={getUserData}
              required
            />
            <label class="form-check-label">Male</label>
          </div>
          <div class="mb-3">
            <input
              class="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              onChange={getUserData}
            />
            <label class="form-check-label">Female</label>
          </div>
  
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    
    );
}