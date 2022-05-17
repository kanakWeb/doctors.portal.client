import React from 'react';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';


const Users = () => {
    const{data :users,isLoading}=useQuery("users",()=>fetch('http://localhost:5000/users').then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className=' text-5xl'>All users {users?.length}</h2>
            <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              
              <th></th>
              <th>_id</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user._id}</td>
                <td>{user.email}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default Users;