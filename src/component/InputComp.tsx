import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const InputComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const MutateData = gql`
    mutation createUser($name: String, $email: String, $password: String) {
      createUser(name: $name, email: $email, password: $password) {
        name
        email
        password
      }
    }
  `;

  const [createUser] = useMutation(MutateData);

  const onSubmit = (e: any) => {
    e.preventDefault();
    createUser({ variables: { name, email, password } });
  };

  return (
    <div>
      <div>Inputting Data</div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(e: any) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputComp;