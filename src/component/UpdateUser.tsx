import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

type props = {
    props: any
}
// type Mutation {
//   updateUser(id: ID!, name: String): User
// }
const UpdateUser: React.FC<props> = ({props}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const MutateData = gql`
      mutation updateUser($id: id,$name: String, $email: String, $password: String) {
        updateUser(id: $id,name: $name, email: $email, password: $password) {
          id
          name
        }
      }
    `;
    console.log(props.id)

    const [updateUser] = useMutation(MutateData);
    const onSubmit = (e: any) => {
      e.preventDefault();
      updateUser({ variables: { id: props.id,name, email, password } });
    };
  return (
      <div>
          <div>Update Data</div>
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
  )
}

export default UpdateUser