import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [inputUser, setInputUser] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


  const { id } = useParams();

  const fetchAllUser1 = async () => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    console.log(res);
    setName(res.name);
    setEmail(res.email);
    setPassword(res.password);
    setRole(res.role);

  }
  useEffect(() => {

    fetchAllUser1();
    }, []);

    const handleSubmit1 = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
            name,
            email,
            password,
            role
        }),
        
    });
    console.log(res);
    if (res.status === 200) {
      window.location = "/";
    }
    }


  // data fetching single
//   const fetchSingleUser = async () => {
//     const res = await axios.get(`http://localhost:3000/api/users/${id}`);
//     console.log(res);
//     setInputUser({
//       name: res.data.name,
//       email: res.data.email,
//       password: res.data.password,
//         role: res.data.role
//     });
//   };
//   useEffect(() => {
//     fetchSingleUser();
//   }, []);

//   const handleChnage = (event) => {
//     setInputUser({
//       ...inputUser,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(inputUser);
//     const res = await axios.put(
//       `http://localhost:3000/api/users/${id}`,
//       inputUser
//     );
//     console.log(res);
//     if (res.status === 200) {
//       window.location = "/";
//     }
//     // fetchAllUser();
//   };
  return (
    <div className="w-1/3 mx-auto mt-5">
      <form onSubmit={handleSubmit1}>
        <h1>Update User</h1>
        <div className="">
          <label className=" text-sm text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter name"
            required
            // value={inputUser.name}
            value={name}
            // onChange={handleChnage}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Email</label>
          <input
            type="text"
            name="email"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter email "
            required
            // value={inputUser.email}
            // onChange={handleChnage}
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Password</label>
          <input
            type="password"
            name="password"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Password "
            required
            // value={inputUser.password}
            // onChange={handleChnage}
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Role</label>
          <input
            type="role"
            name="role"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Role "
            required
            // value={inputUser.role}
            // onChange={handleChnage}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="flex justify-center my-4">
          <button type="submit" className="px-4 py-2 bg-yellow-400 rounded-sm" onClick={handleSubmit1}>
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;