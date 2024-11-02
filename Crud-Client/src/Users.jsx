import React, { useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'

export default function Users() {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",

    }).then(res => res.json()).then(data => {
      console.log(data);
      if (data.deletedCount > 0) {
        alert("Deleted Successfully ✅");
        const remaining = users.filter(user => user._id !== _id);
        setUsers(remaining);
      }
      
    });
  }
  return (
    <div className="flex flex-col gap -5 items-center ">
      <div className="mt-5">
        <h1 className="font-bold text-sky-700 text-5xl">
          Details of {users.length} user's
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 mt-5 text-center ">
        {users.map((user) => (
          <div
            className="border-2 border-sky-700 p-5 rounded-xl text-sky-700 text-2xl"
            key={user._id}
          >
            <h1>User Name : {user.name}</h1>
            <h1>User Email : {user.email}</h1>
            <div className='flex gap-10 justify-center'>
              <NavLink to={`/update/${user._id}`}>
                <button className="border-2 mt-4 px-2 py-1 rounded border-red-600 text-red-600 text-xl"
                
                >
                 
                  Update 👆
                </button>
              </NavLink>
              <button
                className="border-2 mt-4 px-2 py-1 rounded border-red-600 text-red-600 text-xl"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
