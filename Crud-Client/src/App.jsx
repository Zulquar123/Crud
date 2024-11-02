import React from 'react'

export default function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('Users added successfully ✅');
        }
         form.reset();
      });
    
   
}

  return (
    <div className="w-full  flex justify-center ">
      <div className="flex mt-10 justify-center border-2 border-sky-700 rounded">
        <form
          action=""
          onSubmit={handleAddUser}
          className="flex flex-col gap-3 p-5 items-center "
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            id=""
            className="border-2 border-sky-700 rounded p-3 "
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            id=""
            className="border-2 border-sky-700 rounded p-3 "
          />
          <input type="submit" value="Add User" className='border-2 border-sky-700 px-3 py-2 rounded '/>
        </form>
      </div>
    </div>
  );
}
