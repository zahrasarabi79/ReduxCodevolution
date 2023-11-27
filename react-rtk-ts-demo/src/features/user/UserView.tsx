import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import { fetchUsers } from "./userSlice";
export const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
