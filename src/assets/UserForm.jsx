import { useState } from "react";
import "./UserForm.css";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [tac, setTac] = useState(false);

  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");

  function valid() {
    let e = {};
    if (name.length < 3) e.name = "Name at least 3 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Invalid email";
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        pass
      )
    )
      e.pass =
        "Password at least 6 characters and required small, capital, number & special character";
    if (pass != cpass) e.cpass = "Passwords not matching";
    if (age < 18 || age > 30) e.age = "Age between 18-30";
    if (phone.length != 10) e.phone = "Phone length required 10";
    if (!tac) e.tac = "Tick Checkbox";
    return e;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = valid();
    console.log(err);
    if (Object.keys(err).length) {
      setErrors(err);
      setMsg("");
    } else {
      setErrors({});
      setMsg("Successful Registration");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>{errors.name}</span>
      </div>

      <div>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{errors.email}</span>
      </div>

      <div>
        Password:
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <span>{errors.pass}</span>
      </div>

      <div>
        Confirm Password:
        <input
          type="password"
          value={cpass}
          onChange={(e) => setCpass(e.target.value)}
        />
        <span>{errors.cpass}</span>
      </div>

      <div>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <span>{errors.age}</span>
      </div>

      <div>
        Phone: +91
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <span>{errors.phone}</span>
      </div>

      <div>
        <input
          type="checkbox"
          checked={tac}
          onChange={(e) => setTac(e.target.checked)}
        />{" "}
        Accept Terms & Conditions
        <span>{errors.tac}</span>
      </div>

      <button type="submit">Submit</button>
      <p>{msg}</p>
    </form>
  );
}
