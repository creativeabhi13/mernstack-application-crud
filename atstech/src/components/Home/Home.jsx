import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  // create users data
  // const [inputUser, setInputUser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   role: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  
  // handle change function for input fields
  // const handleChange = (event) => {
  //   setInputUser({
  //     ...inputUser,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // handle submit function for form
  // const handleSubmit1 = async (event) => {
  //   event.preventDefault();
  //   console.log(inputUser);
  //   const res =await axios.post("http://localhost:3000/api/users/createuser", inputUser);
  //   console.log(res);
  //   fetchAllUser();
  // };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    await fetch("http://localhost:3000/api/users/createuser",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        {
          name,
          email,
          password,
          role
        }
      )
    });
setName("");
setEmail("");
setPassword("");
setRole("");
    getUsers();

  }


  // get all users data
  const [users, setUsers] = useState([]);
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:3000/api/users");
  //   console.log(res.data);
  //   setUsers(res.data.users);
  // };
  // useEffect(() => {
  //   fetchAllUser();
  // }, []);

const getUsers = async () => {
const res=await fetch("http://localhost:3000/api/users");
const data=await res.json();
setUsers(data.users);
};
useEffect(()=>{
  getUsers();
},[]);

// delete user by id function

const handleDelete = async(id) => {
let res = await fetch(`http://localhost:3000/api/users/${id}`,{
  method:"DELETE"
});
if(res.status===200){
  {
    getUsers();
  }


}
}
  return (
    <>
    <div className="w-1/3 mx-auto mt-5">
      {/* Creating form */}
      <form action="" onSubmit={handleSubmit}>
            <h1>Create User</h1>
            <div className=''>
                <label className='text-sm text-gray-500'>Name</label>
                <input type="text" name='name' className='block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300' 
                placeholder='Enter your name' required 
                // value={inputUser.name}
                value={name} 
                // onChange={handleChange}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="">
          <label className=" text-sm text-gray-500 ">Email</label>
          <input
            type="text"
            name="email"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter your email "
            required
          // value={inputUser.email} 
          value={email}  
          // onChange={handleChange}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Password</label>
          <input
            type="password"
            name="password"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter your Password "
            required
            // value={inputUser.password}
            value={password}
            // onChange={handleChange}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Role</label>
          <input
            type="role"
            name="role"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter your role"
            required
            // value={inputUser.role}
            value={role}
            // onChange={handleChange}
            onChange={(e)=>setRole(e.target.value)}
          />
        </div>

        <div className="flex justify-center my-10">
          <button type="submit" className="px-10 py-4 bg-yellow-400 rounded-sm" onClick={handleSubmit}>
            Add User
          </button>
        </div>
        </form>
</div>
        {/* creating table */}
        <div className="w-3/3 mx-auto mt-5">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-lg text-center text-white-500 ">
          <thead className="text-[15px] text-white-800 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-8 py-3">
                SN.
              </th>
              <th scope="col" className="px-8 py-3">
                Name
              </th>
              <th scope="col" className="px-8 py-3">
                Email
              </th>
              <th scope="col" className="px-8 py-3">
                Password
              </th>
              <th scope="col" className="px-8 py-3">
                Role
              </th>
              <th scope="col" className="px-8 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (item, i) => (
              
                (
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {i + 1 ? i + 1 : "-"}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.name ? item?.name : "-"}
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {item?.email ? item?.email : "-"}{" "}
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      {item?.password ? item?.password : "-"}
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      {item?.role ? item?.role : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-x-4 justify-center">
                        <NavLink
                          //  to={`/readuser/${item._id}`}
                          className="font-medium text-green-600 dark:text-blue-500 hover:underline"
                        >
                          Read
                        </NavLink>
                        <NavLink
                          //   to={`/updateuser/${item._id}`}
                          className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </NavLink>
                        <button
                       onClick={() => handleDelete(item._id)}
                          className="font-medium text-red-500  hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Home;
