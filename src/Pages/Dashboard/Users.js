import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://serene-plains-16566.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "accessToken"
        )}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className=" text-2xl">All users {users?.length}</h2>
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>

            <th>Email</th>
            <th>Create Admin</th>
            <th>Remove Users</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UserRow
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
