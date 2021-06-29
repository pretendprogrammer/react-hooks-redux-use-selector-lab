import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {
  let state = useSelector((state) => state);
  return (
    <div>
      <ul>
        {state.users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
      Total Users: {state.users.length}
    </div>
  );
}

export default Users;
