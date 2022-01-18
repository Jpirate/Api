import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="Users">
        {" "}
        {users.map((user) => (
          <div key={user.id}>
            {user.id} | {user.name} | {user.website}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
