import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Update() {
  const loadedUser = useLoaderData();



  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User's Data Updated Successfully ✅");
        }
      });
  }
  return (
    <div className="flex flex-col gap -5 items-center">
      <div className="mt-5">
        <h1 className="font-bold text-sky-700 text-5xl">
          Update Information of {loadedUser.name}
        </h1>
      </div>
      <div className="flex mt-10 justify-center border-2 border-sky-700 rounded">
        <form action="" className="flex flex-col gap-3 p-5 items-center"
        onSubmit={handleUpdateUser}
        
        >
          <input
            defaultValue={loadedUser?.name}
            type="text"
            name="name"
            placeholder="Enter your Name"
            id=""
            className="border-2 border-sky-700 rounded p-3 "
          />
          <input
            defaultValue={loadedUser?.email}
            type="email"
            name="email"
            placeholder="Enter your Email"
            id=""
            className="border-2 border-sky-700 rounded p-3 "
          />
          <input
            type="submit"
            value="Update User"
            className="border-2 border-sky-700 px-3 py-2 rounded "
          />
        </form>
      </div>
    </div>
  );
  
}
