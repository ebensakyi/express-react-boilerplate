import React from "react";

 const User = (props) => {
  return props.users.map((user) => {
    return (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <h5>{user.age}</h5>
      </div>
    );
  });
};
export default User