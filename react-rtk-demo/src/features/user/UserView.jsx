import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user.users);
    dispatch(fetchUsers());
  }, []);
 
  return (
    <div>
      <h2>List Of Users</h2>
      {user.loading && <div>Loading . . . </div>}
      {!user.loading && user.error ? <div>Error :{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((username) => (
            <li key={username.id}>{username.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
