import React from 'react'
import { gql, useMutation } from '@apollo/client'

type props = {
    props: any
}
const DeleteComp: React.FC<props> = ({props}) => {

    const DELETE_USER = gql`
    mutation deleteUser($id: id){
        deleteUser(id: $id){
            id
        }
    }
    `
    const [deleteUser] = useMutation(DELETE_USER,{variables: {id: props.id}})
    console.log(props.id);

    const deleteData = () => {
        deleteUser({variables: {id: props.id}})
    }
  return (
      <div>
          <div style={ { cursor: "pointer" } } onClick={ ()=>deleteUser()} >dl</div>
          <button style={ { cursor: "pointer" } } onClick={ () => {
              deleteUser({variables: {id: props.id}})
          }} >dl</button>
      </div>
  )
}

export default DeleteComp