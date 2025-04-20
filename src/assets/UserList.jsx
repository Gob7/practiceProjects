import { useState } from "react";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1000, name: "Alice", age: 25 },
    { id: 1001, name: "Bob", age: 30 },
    { id: 1002, name: "Charlie", age: 18 },
  ]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState();

  const addUser = () => {
    if (newName.trim() && newAge.trim()) {
      setUsers([
        ...users,
        { id: Date.now() % 10000, name: newName, age: newAge },
      ]);
      setNewName("");
      setNewAge();
    }
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
    console.log("removed id", id);
  };

  return (
    <div>
      <header>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter name..."
        />
        <input
          type="number"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
          placeholder="Enter age..."
        />
        <button onClick={addUser}>Add User</button>
      </header>

      {users.length == 0 ? (
        <p>No users available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => removeUser(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
