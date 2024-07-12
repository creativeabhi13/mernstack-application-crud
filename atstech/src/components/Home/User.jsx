import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const User = () => {
    const {id} = useParams();
    const [user,setUser]=useState([]);

    const getUser = async()=> {
    const res= await fetch(`http://localhost:3000/api/users/${id}`);
    const data=await res.json();
    setUser(data.user);
    console.log(data.user);
    }
useEffect(()=>{
    getUser();
},[]);



  return (
    <div className='w-2/3 mx-auto mt-5'>
        <div className='relative overfow-x-auto shadow-md'>
            <table className='w-full text-lg align-center text-gray-500'>
                <thead className='text-[17px] text-gray-700 uppercase bg-gray-500'>
                <tr>
                <th scope="col" className="px-6 py-3">
                SN.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            
                </tr>
                </thead>
                <tbody>
                <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user?.name ? user?.name : "-"}
              </th>
              <td className="px-6 py-4"> {user?.email ? user?.email : "-"}</td>
              <td className="px-6 py-4">{user?.password ? user?.password : "-"}</td>
              <td className="px-6 py-4">{user?.role ? user?.role : "-"}</td>
            </tr>
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default User;