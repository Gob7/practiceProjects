import { useState } from "react";
import "./NameList.css";

export default function NameList() {
  const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);
  const [newName, setNewName] = useState("");

  const addName = () => {
    if (newName.trim()) {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  const removeName = (index) => {
    console.log(`removed ${names[index]} at ${index}`);
    setNames(names.filter((x, i) => i != index));
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter name..."
      />
      <button onClick={addName}>Add</button>

      {names.length == 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name} <button onClick={() => removeName(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
